const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Something went wrong!' });
            });
    },

    // get thought by id
    getThoughtById({ params }, res) {
        Thought.findById(params.id)
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    },

    // create thought (and push the created thought's _id to the associated user's thoughts array field)
    createThought({ body }, res) {
        const { userId, username, thoughtText } = body;
    
        // Check if userId, username, and thoughtText are present in the request body
        if (!userId || !username || !thoughtText /* || other validation checks */) {
            res.status(400).json({ message: 'Invalid request body' });
            return;
        }
    
        Thought.create({
            thoughtText,  // Include the thoughtText field when creating the thought
            username,     // Include the username field when creating the thought
        })
            .then(dbThoughtData => {
                // After creating the thought, update the associated user
                // to add the thought's _id to their thoughts array field.
                return User.findByIdAndUpdate(
                    userId,
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    // Handle the case where the user was not found
                    res.status(404).json({ message: 'User not found!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    },
    
    // update thought by id
    updateThoughtById(req, res) {
        Thought.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    },

    // delete thought by id
    deleteThoughtById(req, res) {
        Thought.findByIdAndDelete(req.params.id)
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json({ message: 'Thought deleted successfully' });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    }
};
