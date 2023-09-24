const { User } = require('../models');

module.exports = {
    // Add a friend to a user's friend list
    addFriend(req, res) {
        const { userId, friendId } = req.params;

        // Check if userId and friendId are present
        if (!userId || !friendId) {
            return res.status(400).json({ message: 'Invalid request' });
        }

        // Find the user by its ID and push the new friend to its friends array
        User.findByIdAndUpdate(
            userId,
            { $push: { friends: friendId } },
            { new: true, runValidators: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    },
    //DELETE to remove a friend from a user's friend list
    deleteFriend(req, res, result) {
        const { userId, friendId } = req.params;
        console.log(friendId);
        // Check if friendId is present
        if (!friendId) {
            return res.status(400).json({ message: 'Invalid request' });
        }
        //

        // Find the friend by its ID and remove it from the friends array in the associated user
        User.findByIdAndUpdate(
            userId,
            { $pull: { friends: { friendId: friendId } } },
            { new: true },
            //if deleted, return message successfully deleted friend
            res.json({ message: 'Successfully deleted friend' })

        )
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    }
};