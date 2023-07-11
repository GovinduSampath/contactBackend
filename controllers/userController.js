const asyncHandler = require("express-async-handler");
//desc Register a user
//@route POST /api/users
//@access public

const registerUsers =asyncHandler (async(req,res)=>{
    res.json({message:"register the user"});
 }); 

 module.exports={registerUsers};
