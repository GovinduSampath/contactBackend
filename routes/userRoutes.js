const express = require("express"); 
const router = express.Router();
const {registerUsers}= require("../controllers/userController");

router.post("/register",registerUsers);

router.post("/login",(req,res)=>{
    res.json({message:"login user"});
});

router.get("/current",(req,res)=>{
    res.json({message:"current user information"});
});

module.exports= router;