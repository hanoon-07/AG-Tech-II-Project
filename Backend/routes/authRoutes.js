// routes/authRoutes.js
const { signup, login } = require('../controllers/authController.js');

const router = (require('express')).Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
