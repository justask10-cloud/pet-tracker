import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true }, // instead of species
  age: Number,
  breed: String,
});


const Pet = mongoose.model('Pet', petSchema);
export default Pet;
