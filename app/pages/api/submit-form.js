// pages/api/submit-form.js
import connectToDatabase from '@/app/lib/mongodb';
import FormData from '@/app/models/formData';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, service } = req.body;

    try {
      await connectToDatabase();
      const formData = new FormData({
        name,
        phone,
        email,
        service,
      });

      await formData.save();
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit form' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
