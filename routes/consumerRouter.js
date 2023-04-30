import asyncHandler from 'express-async-handler';
import express from 'express';
import Consumer from  '../models/consumer.js';
const consumerRouter = express.Router();

// Get: list all consumer
consumerRouter.get('/', asyncHandler(async(req, res)=>{
    const consumers = await Consumer.find();
    res.json({
        status:'success',
        result:consumers
    });
}))

// POST: add new consumer
consumerRouter.post('/', asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, address, postcode, state } = req.body;
  
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
  
    res.json({
      status: 'success',
      message: 'Consumer added successfully',
      result: consumer
    });
  }));

  export default  consumerRouter;