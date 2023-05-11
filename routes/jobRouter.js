import express from 'express';
// import { authAllUsers, authConsumer } from '../controller/auth.js';
import Job from '../models/job.js';
import { listAlljobs, postJob, showJobDetails, updateJob } from '../controller/jobContoller.js';
const jobRouter = express.Router();

jobRouter.route('/').get(listAlljobs)
.post(postJob)

jobRouter.route('/:id').get(showJobDetails)
.put(updateJob)

export default jobRouter