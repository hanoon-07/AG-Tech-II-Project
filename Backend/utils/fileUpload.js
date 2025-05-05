import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const storage = multer.memoryStorage();

const upload = multer({
  storage: storage, // Use memory storage
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit (adjust as needed)
  fileFilter: (req, file, cb) => {
   
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  }
});

// Function to upload buffer to Cloudinary
const uploadToCloudinary = (fileBuffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
    // Pipe the buffer to the upload stream
    uploadStream.end(fileBuffer);
  });
};

// Export both multer middleware and the upload function
export { upload, uploadToCloudinary };
