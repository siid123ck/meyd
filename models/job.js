const mongoose = require('mongoose')

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
  makers: [{
    maker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Maker',
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
  }]
}, {
  timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
