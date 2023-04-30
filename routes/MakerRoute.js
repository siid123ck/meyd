import Maker from "../models/maker.js";
import express from 'express';
import asyncHandler from 'express-async-handler';
const makerRouter = express.Router();


// Get: list all makers
makerRouter.get('/', asyncHandler(async(req, res)=>{
    const makers = await Maker.find();
    res.json({
        status:'success',
        result:makers
    });
}))

// Get: create maker 
makerRouter.post('/', asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, phone, address, postcode, state, bio } = req.body;
  
    const maker = new Maker({
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
      postcode,  
      state,
      bio,
    });
  
    await maker.save();
  
    res.json({
      status: 'success',
      message: 'Maker added successfully',
      result: maker
    });
  }));
  

export default makerRouter;