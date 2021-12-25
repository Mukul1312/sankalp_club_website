const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req,res) => {
    res.send("Hello World from auth")
});

//Using Async await

router.post('/register', async (req,res) => {

    const { name, email, password, cpassword } = req.body;

    if(!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try{
        const userExist = await User.findOne({email:email})

        if(userExist) {
            return res.status(422).json({ error: "Email Already Exist" });
        }

        const user = new User({ name, email, password, cpassword });

        await user.save();

        res.status(201).json({ message: "New user registered"});


    } catch(err){
        console.log(err);
    }

    console.log(name);
    console.log(email);
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