import mongoose from 'mongoose';

const makerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: {type:String, required:true},
  phone: { type: String, required: true },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  state: { type: String, required: true },
  bio: { type: String },
  rating: { type: Number, default: 0 },
  numberOfRatings: { type: Number, default: 0 }
});

const Maker = mongoose.model('Maker', makerSchema);
export default Maker;