import express from 'express';

import { login, register } from '../controller/authController.js';

const authRouter = express.Router();


// POST: register new user
authRouter.post('/register', register);


  authRouter.post('/login', login);

 export default authRouter