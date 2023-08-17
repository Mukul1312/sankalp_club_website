const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');

dotenv.config({ path:'./config.env' });
require("./db/conn");

const app = express();
const User = require("./model/userSchema");

// app.use(require("./app/auth"))

const PORT = process.env.PORT;

// const middleware = (req,res,next) => {
//     console.log("hello my middleware");
// }

// middleware();

app.use(express.json());


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://sankalp-mpgi.netlify.app');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization");


    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var razorpayTEST = new Razorpay({ 
    key_id: process.env.TEST_KEY_ID,
    key_secret: process.env.TEST_KEY_SECRET
})

var razorpayLIVE = new Razorpay({ 
    key_id: process.env.LIVE_KEY_ID,
    key_secret: process.env.LIVE_KEY_SECRET
})



app.use(require('./router/auth'));

app.get('/', (req,res) => {
    res.send("Hello World from app")
});

app.get('/secret', (req,res) => {
    res.send("it's an secret page");
})

let order;

app.post('/orders', async (req,res) => {

    const __DEV__ = req.headers.referer.includes("localhost")
    console.log(`Currently development is ${__DEV__}`);
    
    const {amount, currency} = req.body
    // console.log(amount,currency);
    console.log("Trying to create an order")

    const options = {
        amount: +amount * 100,  // amount in the smallest currency unit
        currency: currency,
        receipt: "receipt#1"
    };
    try {
        const response = await (__DEV__ ? razorpayTEST : razorpayLIVE).orders.create(options)
        console.log(response)

        order = response

        const data = {
            order_id: response.id,
            amount: response.amount,
        }

        res.status(201).send(JSON.stringify(data))
    } catch(error) {
        console.log(error)
    }
})


app.post('/verification', (req,res) => {

    const SECRET = process.env.SHA_SECRET

    console.log(req.body)
    //validation
    const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', SECRET)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

    console.log(digest)
    console.log(req.headers['x-razorpay-signature'])

    if(digest === req.headers['x-razorpay-signature']){
        console.log('request if legit')
        res.status(200).json({success:true, message:"Payment has been verified"})
    } else {
        console.log('request is unmatched')
        res.json({success:false, message:"Payment verification failed"})
    }

    console.log(order)

})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
