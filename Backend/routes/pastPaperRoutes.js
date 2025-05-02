const express = require('express');
const { 
  uploadPastPaper,
  getAllPastPapers,
  getSinglePastPaper,
  updatePastPaper,
  deletePastPaper,
  getRecentPapers
} = require('../controllers/pastPaperController.js');

const router = express.Router();

// Routes
router.post('/', uploadPastPaper);
router.get('/', getAllPastPapers);
router.get('/recent',getRecentPapers)
router.get('/:id', getSinglePastPaper);
router.put('/:id', updatePastPaper);
router.delete('/:id', deletePastPaper);

module.exports = router; // ✅ Correct for CommonJS
