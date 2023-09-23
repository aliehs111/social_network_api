const router = require('express').Router();
const {
  createUser, getAllUsers, getUserById, updateUserById, deleteUserById,
} = require('../controllers/users');

//get all users
router.get('', getAllUsers);
//get user by id
router.get('/:id', getUserById);
//create user
router.post('', createUser);
//update user by id
router.put('/:id', updateUserById);
//delete user by id
router.delete('/:id', deleteUserById);

module.exports = router;
