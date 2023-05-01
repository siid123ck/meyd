import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

// Hash password before saving to database
makerSchema.pre('save', async function(next) {
    const maker = this;
    if (!maker.isModified('password')) {
      return next();
    }
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(maker.password, salt);
      maker.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });
  
const Maker = mongoose.model('Maker', makerSchema);
export default Maker;