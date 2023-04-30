import mongoose from 'mongoose';

const consumerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

const Consumer = mongoose.model('Consumer', consumerSchema);

export default Consumer
