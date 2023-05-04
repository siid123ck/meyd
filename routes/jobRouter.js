import express from 'express';
import asyncHandler from 'express-async-handler'
import { authAllUsers, authConsumer } from '../controller/auth.js';
import Job from '../models/Job.js';
const jobRouter = express.Router();

jobRouter.route('/').get(authAllUsers, asyncHandler( async(req, res)=>{
  const jobs = await Job.find();
    res.json({
        status:'success',
        result:jobs
    })
}))

jobRouter.route('/').post(authConsumer, asyncHandler(async (req, res)=>{
  const jobs = await Job.find();
    jobs.push(req.body)
    res.json({
        status:'success',
        result:jobs
    })
}))

jobRouter.route('/:id').get(authAllUsers, asyncHandler (async(req, res)=>{
    const jobId = req.params.id;
    const job = Job.findById(jobId)
    if (!job) {
        // If the job with the given ID is not found, send an error response
        res.status(404).json({
          status: 'error',
          message: 'Job not found',
        });
      } else {
        // If the job with the given ID is found, send a success response with the job object
        res.json({
          status: 'success',
          result: job,
        });
      }
}))

jobRouter.route('/:id').put(authConsumer, asyncHandler(async(req, res)=>{
    const newStatus = req.body.status;
    const jobId = req.params.id;
    let job = Job.findById(jobId)
    job.status = newStatus;
    
    
    res.json({
        status:'success',
        result:job
    })
}))

export default jobRouter