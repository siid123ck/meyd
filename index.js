import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import jobRouter from './routes/jobRouter.js';
import './config/db.js'
import quoteRouter from './routes/quotesRouter.js';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.json('Hello World from si!'); 
});

app.use('/jobs', jobRouter)
app.use('/users', userRouter);
app.use('/quotes', quoteRouter);
app.use('/auth', authRouter);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

