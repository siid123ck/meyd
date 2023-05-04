import Maker from "../models/maker.js";
import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import {authAdmin, authMaker} from "../controller/auth.js";
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
    const existingMaker = await Maker.findOne({email}); 
   
    if(existingMaker){
      return res.status(400).send('Username already exist')
    }
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
    const maker = await Maker.findOne({email});
    if(!maker) {
    return res.end('Invalid maker');
    }
    
    const isMatch = await bcrypt.compare(password, maker.password); 
    if(isMatch){
      req.session.maker = maker;
    }
    res.send('success');
  }));
  
  // Protected route for getting a single maker
makerRouter.get('/:id', authMaker, asyncHandler(async (req, res) => {
    const maker = await Maker.findById(req.params.id);
    res.json(maker);
  }));
  
  // Protected route for updating a maker
  makerRouter.put('/:id', authAdmin, asyncHandler(async (req, res) => {
    const maker = await Maker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(maker);
  }));
    
  // Protected route for deleting a maker
  makerRouter.delete('/:id', authAdmin, asyncHandler(async (req, res) => {
    await Maker.findByIdAndDelete(req.params.id);
    res.json({ message: 'Maker deleted successfully' });
  }));
  

export default makerRouter;