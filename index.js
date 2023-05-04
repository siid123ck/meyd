import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import session from 'express-session';
import jobRouter from './routes/jobRouter.js';
import consumerRouter from './routes/consumerRouter.js';
import './config/db.js'
import makerRouter from './routes/MakerRoute.js';

const app = express();

app.use(session({
  secret: 'dijkf',
  resave: false,
  saveUninitialized: false,
}));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.json('Hello World from siid!');
});

app.get('/auth/logout', (req, res)=>{
  if(req.session.maker) delete req.session.maker; 
  else if(req.session.consumer) delete req.session.consumer;
  else {
    res.redirect('/');
  }
})

app.get('/auth/login', (req, res)=>{
  res.send('Please login using user details')
})


app.use('/jobs', jobRouter)
app.use('/consumers', consumerRouter);
app.use('/makers', makerRouter);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
