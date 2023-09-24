const router = require('express').Router();
const {
  createUser, getAllUsers, getUserById, updateUserById, deleteUserById, 
} = require('../controllers/users');

const {
addFriend, deleteFriend
} = require('../controllers/friends');

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
//add friend to user list
router.get('/friends/:id', addFriend);
//delete friend from user list
router.delete('/friends/:id', deleteFriend);

module.exports = router;
