import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  maker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Maker',
    required: true
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  comments: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected']
  }
}, { timestamps: true });

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
