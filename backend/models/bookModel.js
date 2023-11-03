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
    image:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
