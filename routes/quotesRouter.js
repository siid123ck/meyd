import express from 'express';
import Quote from '../models/quote.js';
import { listAllQoutes, postQoute, showQuoteDetails } from '../controller/quoteController.js';

const quoteRouter = express.Router();

quoteRouter.route('/').get(listAllQoutes)
.post(postQoute)

quoteRouter.route('/:id').get(showQuoteDetails)
.put()

export default quoteRouter;