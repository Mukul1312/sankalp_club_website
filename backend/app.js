const dotenv = require('dotenv');
const express = require('express');

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


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
