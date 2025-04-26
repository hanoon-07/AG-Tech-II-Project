import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import pastPaperRoutes from './routes/pastPaperRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      'https://auditor-frontend.vercel.app',
      'https://cert.lpgexpress.com.pk',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

// Test route
app.get('/', (req, res) => {
  res.send('Server running!');
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/pastPapers', pastPaperRoutes);

// MongoDB connection
const api = process.env.MONGO;
console.log("Api", api);

mongoose
  .connect(api, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.error('DB connection error:', err.message);
  });

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
