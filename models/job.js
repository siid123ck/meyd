import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  consumer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Consumer',
    required: true
  },
  clothingType: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: Number
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'completed'],
    default: 'open'
  },
  quotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quote'
  }]
  
}, {
  timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
