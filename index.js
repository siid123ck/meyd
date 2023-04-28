import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/jobRouter.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World from siid!');
});

app.use('/jobs', router)

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
