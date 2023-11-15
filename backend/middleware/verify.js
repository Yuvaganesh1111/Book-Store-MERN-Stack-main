import express  from "express";
import jwt from "jsonwebtoken"

import dotenv from "dotenv";
import { usermodel } from "../models/userModel.js";
dotenv.config();

const verify=async (req,res,next)=>{
       try{ 
        const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
        if(token==null){
            console.log("token not found");
           return res.status(401).send("token not found")
        }
        const data=jwt.verify(token,process.env.SECRET_KEY);
        if(!data){
            console.log("data not found")
            return res.send("data not found")
        }
        console.log(data)
        const user=await usermodel.findOne({email:data.email});
        if(!user){
            return res.send("data not found")
        }
        next();
    }
    catch(err){
        console.log(err)
         return res.status(500).send("internal server error")
      }
}
export default verify;