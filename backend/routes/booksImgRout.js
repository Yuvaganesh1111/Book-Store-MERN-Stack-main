import express from "express";
import multer from "multer";
import Grid from "gridfs-stream"
import mongoose from "mongoose";
import mongodb from 'mongodb';
const ObjectID=mongodb.ObjectId;
const router=express.Router();
const storage=multer.memoryStorage();
const uploads=multer({storage:storage});
const conn=mongoose.Connection;
const gfs=Grid(conn,ObjectID);
router.post('/uploadimg',uploads.single('file'),(req,res)=>{

    try{
        if(!req.file){
        return res.status(401).send("file not uploded")
    }
    const writeStream=gfs.createWriteStream({filename:req.file.originalname})
    writeStream.on('close',(file)=>{
        return res.status(200).send("file uploded successfully");
    });
    writeStream.end(req.file.buffer);
}
catch(err){
    console.log("---------------error ---------------- "+err);
    return res.status(500).send("internal server error");
}
})
export default router;