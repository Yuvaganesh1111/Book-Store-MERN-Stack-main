import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      
    },
    author: {
      type: String,
      
    },
    publishYear: {
      type: Number,
      
    },
    price:{
      type:Number,
    },
    quantity:{
      type:Number,
      default:1,
    },
    image:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
