import express from 'express';
import jobs from '../data/jobs.js';

const router = express.Router();

router.route('/').get((req, res)=>{
    res.json({
        status:'success',
        result:jobs
    })
})

router.route('/').post((req, res)=>{
    jobs.push(req.body)
    res.json({
        status:'success',
        result:jobs
    })
})

router.route('/:id').get((req, res)=>{
    const jobId = req.params.id;
    const job = jobs.find(job=>job.id==jobId)
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
})

router.route('/:id').put((req, res)=>{
    const newStatus = req.body.status;
    const jobId = req.params.id;
    let updatedJob = jobs.find(job=>job.id==jobId);
    updatedJob.status = newStatus;
    console.log(updatedJob)
    
    res.json({
        status:'success',
        result:updatedJob
    })
})

export default router