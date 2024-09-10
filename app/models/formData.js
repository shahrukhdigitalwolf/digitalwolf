// models/FormData.js
import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
  name: String,
  phone: string,
  email: String,
  service: String,
});

export default mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);
