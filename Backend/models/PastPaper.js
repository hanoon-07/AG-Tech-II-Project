import mongoose from 'mongoose';

const pastPaperSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: [true, 'Subject Name is required'],
  },
  courseCode: {
    type: String,
    required: [true, 'Course Code is required'],
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
  },
  universityName: {
    type: String,
  },
  paperUpload: {
    type: [String], // Array of Cloudinary URLs
    required: [true, 'At least one paper must be uploaded'],
  },
  paperThumbnail: {
    type: String, // Array of Cloudinary URLs
  },
  paperUnsolved: {
    type: String, // new field
    default: "Unsolved",
  },
}, { timestamps: true });

const PastPaper = mongoose.model('PastPaper', pastPaperSchema);

export default PastPaper;
