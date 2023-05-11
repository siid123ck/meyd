import asyncHandler from 'express-async-handler'
import Job from '../models/job.js';

export const listAlljobs = asyncHandler( async(req, res)=>{
    const jobs = await Job.find();
      res.json({
          status:'success',
          jobs,
          msg:'listing all jobs'
      })
  })

export const postJob =  asyncHandler(async (req, res)=>{
    const job = new Job(req.body);
    await job.save();
      res.json({
          status:'success',
          job,
          msg:'New job is created'
      })
  })
  
export const showJobDetails = asyncHandler (async(req, res)=>{
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
    if (!job) {
        // If the job with the given ID is not found, send an error response
        res.status(404).json({
          status: 'error',
          msg: 'Job not found',
        });
      } else {
        // If the job with the given ID is found, send a success response with the job object
        res.json({
          status: 'success',
          job,
          msg:'Show job details'
        });
      }
})

export const updateJob = asyncHandler(async(req, res)=>{
    const jobId = req.params.id;
    // const newStatus = req.body.status;
    //   const job = await Job.findById(jobId)
    //   job.status = newStatus;
  
      const job = await Job.findByIdAndUpdate(jobId, req.body, {new:true})
      
      job.save();
      
      res.json({
          status:'success',
          result:job,
          msg:'Job updated'
      })
  })