import  express  from "express";
import { Router } from "express";
import { usermodel } from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();
const router=Router();

router.post('/up',async (req,res)=>{
    try{
        if(!req.body.email ||
           !req.body.phno ||
            !req.body.password){
                return res.status(400).send("enter all the data")
            }

           const pass= await bcrypt.hash(req.body.password,10);
        const user={
     email:req.body.email,
      phno:req.body.phno,
      password:pass
        }

     const userdata= await usermodel.create(user);
     return res.status(201).json({messase:"success",
        user:user});
    }
    catch(err){
        
        console.log(err + "------error occured-------")
        return res.status(500).send("internal server error")
    }

})
router.post('/in', async (req, res) => {
    try {
      const emailorphno = req.body.emailorphno;
      const password = req.body.password;
  
      let user;
  
      if (isNaN(emailorphno)) {
        user = await usermodel.findOne({ email: emailorphno });
      } else {
        user = await usermodel.findOne({ phno: emailorphno });
      }
  
      if (!user) {
        console.log("User not found");
        return res.status(404).json({ message: "User not found" });
      }
  
      const result = await bcrypt.compare(password, user.password);
  
      if (!result) {
        console.log("Wrong password");
        return res.status(401).json({ message: "Wrong password" });
      }
      
      const token=jwt.sign({_id:user._id,
      email:user.email},process.env.SECRET_KEY,{expiresIn:"4h"});
  
      console.log("Sign-in success");
      return res.status(200).json({ message: "Sign-in success",
    token:token });
    } catch (err) {
      console.error(err + " ------error occurred-------");
      return res.status(500).send("Internal server error");
    }
  });
  


export default router;