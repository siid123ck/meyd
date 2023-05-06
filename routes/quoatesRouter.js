import express from 'express';
import Quote from '../models/quote.js';
import asyncHandler from 'express-async-handler'

const quoteRouter = express.Router();

quoteRouter.route('/').get(asyncHandler(async(req, res)=>{
    const quotes =await Quote.find();
    res.json({
        status:'success',
        result:quotes
    })
}))

quoteRouter.route('/').post(asyncHandler(async(req, res)=>{
    // const {maker, job, price, comments, status} = req.body;
    const quote = new Quote(req.body);
    await quote.save();

    res.json({
        status:'success',
        result:quote
    })
}))

quoteRouter.route('/:id').get(asyncHandler(async(req, res)=>{
    const id = req.params.id;
    const quote =await Quote.findById(id);
    res.json({
        status:'success',
        result:quote
    })
}))
quoteRouter.route('/:id').put(asyncHandler(async(req, res)=>{
    const id = req.params.id;
    const status = req.body.status;
    const quote =await Quote.findById(id)
    quote.status = status;

    await quote.save();

    res.json({
        status:'success',
        result:quote
    })
}))

export default quoteRouter;