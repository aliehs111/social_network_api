const router = require('express').Router();

// API routes

router.use('/users', require('./userRoutes'));

module.exports = router;