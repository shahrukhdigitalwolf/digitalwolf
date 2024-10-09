import connectToDatabase from '@/app/lib/mongodb';
import FormData from '@/app/models/FormData';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const formData = await FormData.create(req.body);
      res.status(201).json({ success: true, data: formData });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
