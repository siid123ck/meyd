import asyncHandler from 'express-async-handler'
import Quote from '../models/quote.js';

export const listAllQoutes =asyncHandler(async(req, res)=>{
    const quotes = await Quote.find();
    res.json({
        status:'success',
        quotes,
        msg:'Listed all quotes'
    })
})

export const postQoute = asyncHandler(async(req, res)=>{
    // const {maker, job, price, comments, status} = req.body;
    const quote = new Quote(req.body);
    await quote.save();

    res.json({
        status:'success',
        quote,
        msg:'Quoted created successfully'
    })
})

export const showQuoteDetails = asyncHandler(async(req, res)=>{
    const id = req.params.id;
    const quote = await Quote.findById(id);
    res.json({
        status:'success',
        quote,
        msg:'Show quote details'
    })
})

export const updateQuote = asyncHandler(async(req, res)=>{
    const id = req.params.id;
    // const status = req.body.status;
    // quote.status = status;
    const quote =await Quote.findByIdAndUpdate(id, req.body, {new:true})

    res.json({
        status:'success',
        quote,
        msg:'Quoted updated successfully'
    })
})