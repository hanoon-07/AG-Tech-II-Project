import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import pastPaperRoutes from './routes/pastPaperRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import mime from 'mime';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// MongoDB connect (connects only once in serverless)
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('DB connection successful');
  } catch (err) {
    console.error('DB connection error:', err.message);
  }
}
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.send('Server running!'));
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/pastPapers', pastPaperRoutes);

// Serve PDFs
app.get('/uploads/books/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'uploads', 'books', fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) return res.status(404).send('PDF not found');

    const mimeType = mime.getType(filePath);
    res.setHeader('Content-Type', mimeType || 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${fileName}"`);
    res.send(data);
  });
});

// ❌ Do NOT use app.listen()
// ✅ Instead, export it for Vercel serverless
export default app;
