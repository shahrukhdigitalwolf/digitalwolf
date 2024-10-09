import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide an phone'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
  },
  service: {
    type: String,
    required: [true, 'Please provide a sevice'],
  },
});

export default mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);
