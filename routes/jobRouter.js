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
    console.log(req.body)
    jobs.push(req.body)
    res.json({
        status:'success',
        result:req.body
    })
})

export default router