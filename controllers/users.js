const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Something went wrong!' });
            });
    },
    //get user by id
    getUserById({ params }, res) {
        User.findById(params.id)
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                // Otherwise, send the data
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal Sever Error' });
            });
    },
    // create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.json({ message: 'Internal Sever Error' })
            });
    },

    // update user by id
    updateUserById(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json( {message: 'Internal Sever Error'}));
    },
    //delete user by id
    deleteUserById(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json( {message: 'No user found with this id!'});
                    return;
                }
                // remove user's thoughts
                return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });                
            })
            .then(() => {
                res.json( {message: 'User and associated thoughts deleted!'} );
            })
            .catch(err => res.json( {message: 'Internal Sever Error'}));
    }
     
};


