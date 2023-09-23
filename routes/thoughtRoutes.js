const router = require('express').Router();
const {
  createThought, deleteThoughtById, getThoughtById, getAllThoughts, updateThoughtById,
} = require('../controllers/thoughts');

//middleware to validate user id in request body for getting thoughts
function validateCreateThought(req, res, next) {
  const { userId } = req.body;

  if (!userId) {
      return res.status(400).json({ message: 'Invalid request body' });
  }

  // If all validation checks pass, continue to the next middleware/controller.
  next();
}

//get all thoughts
router.get('', getAllThoughts);
//get thought by id
router.get('/:id', getThoughtById);
//create thought//add validateCreateThought as middleware
router.post('', validateCreateThought, createThought);
//update thought by id
router.put('/:id', updateThoughtById);
//delete thought by id
router.delete('/:id', deleteThoughtById);

module.exports = router;
