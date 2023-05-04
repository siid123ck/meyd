import asyncHandler from 'express-async-handler';
import express from 'express';
import Consumer from  '../models/consumer.js';
import { authAdmin } from '../controller/auth.js';
const consumerRouter = express.Router();

// Get: list all consumer
consumerRouter.get('/', authAdmin, asyncHandler(async(req, res)=>{
    const consumers = await Consumer.find();
    res.json({
        status:'success',
        result:consumers
    });
}))

consumerRouter.get('/:id', authAdmin, asyncHandler(async(req, res)=>{
  res.send('protected page')
}))

// POST: add new consumer
consumerRouter.post('/', asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, address, postcode, state } = req.body;
    const existingConsumer = await Consumer.findOne({email}); 
    if(existingConsumer) {
      return res.end('Consumer already exist, plz login'); 
    }
    const consumer = new Consumer({
      firstName,
      lastName,
      email,
      phone,
      address,
      postcode,
      state
    });
  
    await consumer.save();
    req.session.consumer = consumer;
    res.json({
      status: 'success',
      message: 'Consumer added successfully',
      result: consumer
    });
  }));

  consumerRouter.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const consumer = await Consumer.findOne({email});
    if(!consumer) {
    return res.end('Invalid consumer');
    }
    
    const isMatch = await bcrypt.compare(password, consumer.password); 
    if(isMatch){
      req.session.consumer = consumer;
    }
    res.send('success');
  }));

  export default  consumerRouter;