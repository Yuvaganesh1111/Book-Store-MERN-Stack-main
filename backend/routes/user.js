import  express  from "express";
import { Router } from "express";
import { usermodel } from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import verify from "../middleware/verify.js" 
dotenv.config();
const router=Router();




router.get('/user',verify,async (req,res)=>{
    try{
        


       

     const userdata= await usermodel.find({});
     return res.status(201).json({count:userdata.length,
        users:userdata});
    }
    catch(err){
        
        console(err + "------error occured-------")
        return res.status(500).send("internal server error")
    }

})

export default router;