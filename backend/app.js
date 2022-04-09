const dotenv = require('dotenv');
const express = require('express');
const Razorpay = require('razorpay')

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

var razorpay = new Razorpay({ 
    key_id: 'rzp_test_ugHXcsia9p3Yto',
    key_secret: 'SCQGxZWeGQnwyKbTlf9dohsH'
})



app.use(require('./router/auth'));

app.get('/', (req,res) => {
    res.send("Hello World from app")
});

app.get('/home', (req,res) => {
    res.send("Hello Home")
});

app.get('/team', (req,res) => {
    res.send("Hello team")
});

app.get('/contact', (req,res) => {
    res.send("Hello contact")
});

app.get('/login', (req,res) => {
    res.send("Hello login")
});

app.get('/secret', (req,res) => {
    res.send("it's an secret page");
})

let order;

app.post('/orders', async (req,res) => {

    const {amount, currency} = req.body
    // console.log(amount,currency);
    console.log("Trying to create an order")

    const options = {
        amount: +amount * 100,  // amount in the smallest currency unit
        currency: currency,
        receipt: "receipt#1"
    };
    try {
        const response = await razorpay.orders.create(options)
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

    const SECRET = '741852963'

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
