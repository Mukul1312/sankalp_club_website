const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const cors = require('cors')

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req,res) => {
    res.send("Hello World from auth")
});



//Using Async await

router.post('/register', async (req,res) => {

    const { name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({ error: "Plz filled the field properly" });
    }

    try{
        const userExist = await User.findOne({email:email})

        if(userExist) {
            return res.status(409).json({ error: "Email Already Exist" });
        }

        const user = new User({ name, email, password });

        await user.save();

        res.status(201).json({ message: "New user registered"});


    } catch(err){
        console.log(err);
    }

    console.log(name);
    console.log(email);
})

// const corsOptions = {
//     origin: "http://localhost:3000/signin",
//     methods: ["POST"],
//     allowedHeaders: ['Content-Type'],
//     Credential: true,
//     preflightContinue: false,
//     optionsSucessStatus: 200
// }

router.post('/signin', async (req,res) => {

    console.log(req.body);
    const {email, password} = req.body;

    if(!email || !password) {
        console.log("Plz filled all details");
        res.status(400).json({error: "Plz filled all details"})
    }

    try{
        const userExist = await User.findOne({ email:email })
        console.log("hello from login try");

        if(userExist){

            const isMatch = await bcrypt.compare(password, userExist.password);

            if(isMatch) {
                res.status(200).json({message: "user signin successfully"});

                console.log("user signin successfully");
            } else{
                console.log("user error pass");
                res.status(401).json({error: "user error pass"})
            }
            
        } else {
            console.log("user error email");
            res.status(401).json({error: "user error email"})
        }

    } catch(err){
        console.log(err);
        res.status(400).json({error: "May be it's server error or client error"})
    }
})

module.exports = router;








//Using Promises

// router.post('/register', (req,res) => {

//     // res.json({ message:req.body });
//     // res.send("mera register page");

//     const { name, email, password, cpassword } = req.body;

//     if(!name || !email || !password || !cpassword) {
//         return res.status(422).json({ error: "Plz filled the field properly" });
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email Already Exist" });
//         }

//         const user = new User({ name, email, password, cpassword });

//         user.save().then(() =>{
//             res.status(201).json({ message: "New user registered"});
//         }).catch((err) => res.status(500).json({ error: "Failed to Register"}));

//     }).catch(err => console.log(err));

//     console.log(name);
//     console.log(email);
// })