import Maker from "../models/maker.js";
import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import authMaker from "../controller/authMaker.js";
const makerRouter = express.Router();


// Get: list all makers
makerRouter.get('/', authMaker, asyncHandler(async(req, res)=>{
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

  makerRouter.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    // Find the maker with the given email
    const maker = await Maker.findOne({ email });
  
    // If maker is not found or password does not match, return error
    if (!maker || !await bcrypt.compare(password, maker.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Create a JWT token with the maker ID as payload
    const token = jwt.sign({ makerId: maker._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
    res.json({ token });
  }));
  
  // Protected route for getting a single maker
makerRouter.get('/:id', authMaker, asyncHandler(async (req, res) => {
    const maker = await Maker.findById(req.params.id);
    res.json(maker);
  }));
  
  // Protected route for updating a maker
  makerRouter.put('/:id', authMaker, asyncHandler(async (req, res) => {
    const maker = await Maker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(maker);
  }));
    
  // Protected route for deleting a maker
  makerRouter.delete('/:id', authMaker, asyncHandler(async (req, res) => {
    await Maker.findByIdAndDelete(req.params.id);
    res.json({ message: 'Maker deleted successfully' });
  }));
  

export default makerRouter;