import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import petRoutes from './routes/petRoutes.js';

dotenv.config();

const app = express();

// ✅ Middleware (MUST be before routes)
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Pet Tracker API running!');
});

// MongoDB connection
mongoose.connect('mongodb+srv://ratniakeshav10:ratniakeshav10@project.nepjjrq.mongodb.net/?retryWrites=true&w=majority&appName=Project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
