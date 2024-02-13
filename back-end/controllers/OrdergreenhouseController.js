import asyncHandler from 'express-async-handler';
import cloudinary from '../utils/cloudinary.js';
import {Green} from "../models/OrdergreenHouseModel.js";

import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();


/// @desc  POST greenhouse
// // route     POST/api/greenhouse/Ordergreenhouse
// // @access Public
const green = asyncHandler(async (req,res) => {
  const {type,design,parts,sizes, style,structure,shape,floor,material,roof,name,address,number,Date,email,image} = req.body;

  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: 'Greenhouse-details',
});
  
  const data = await Green.create ({
      type,design,parts,sizes,style, structure,shape,floor,material,roof,name,address,number,Date,email,image:{
        public_id: result.public_id,
        url: result.secure_url,
      }
  });

  


  if(data){
      res.status(201).json(data);
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASS
        }
      });
      var mailOptions = {
        from : 'sivasankarshiva008@gmail.com',
        to : email,
        subject : 'Message From Tillage New Registration',
        html : `
        <h5>Hello you successfully send the landscapeorder <h5/>
        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('id sent: ' + info.response);
        }
      });
  }else{
      res.status(400)
      throw new Error ("Invaild data")
  }
 
})



/// @desc Get all Ordergreenhouse
// // route GET /api/greenhouse/getgreen
// // @access Public
const getgreen = asyncHandler(async (req, res) => {
  const ordergreen = await Green.find({});
  res.json(ordergreen);
});


// @desc Get a single Ordergreenhouse by ID
// route GET /api/greenhouse/ id
// @access Public
const getgreenId = asyncHandler(async (req, res) => {
  const ordergreen = await Green.findById(req.params.id);
  if (ordergreen) {
    res.json(ordergreen);
  } else {
    res.status(404);
    throw new Error('order not found');
  }
});


// @desc Delete Ordergreenhouse by ID
// route DELETE /api/greenhouse/:id
// @access Private
const deletegreenId = asyncHandler(async (req, res) => {
    const {id} =req.params;
     try  {
       const ordergreen= await Green.findOneAndDelete(id)
       res.json({ message: 'order removed',ordergreen });
     } catch {
       res.status(404);
       throw new Error('order not found');
     }
   });
  
  
  
  
  
  
  
  



export { green,getgreen,getgreenId,deletegreenId };