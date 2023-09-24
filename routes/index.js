const router = require('express').Router();

// API routes

router.use('/users', require('./userRoutes'));
router.use('/thoughts', require('./thoughtRoutes'));


module.exports = router;