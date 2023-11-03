import mongoose,{ Schema } from "mongoose";

const userSchma= Schema({
    email:{
    type:String,
    require:true,
    unique:true
},
    phno:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }

})

export const usermodel=mongoose.model('User',userSchma)