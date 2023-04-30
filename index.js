import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import jobRouter from './routes/jobRouter.js';
import consumerRouter from './routes/consumerRouter.js';
import './config/db.js'
import makerRouter from './routes/MakerRoute.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.send('Hello World from siid!');
});

app.use('/jobs', jobRouter)
app.use('/consumers', consumerRouter);
app.use('/makers', makerRouter);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
