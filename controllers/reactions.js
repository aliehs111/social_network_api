const { Thought } = require('../models');

module.exports = {
    createReaction(req, res) {
   
        const thoughtId = req.params.thoughtId;
        const { reactionBody, username } = req.body; // reaction body is sent in the request body

        // Check if thoughtId and reactionBody are present
        if (!thoughtId || !reactionBody) {
            return res.status(400).json({ message: 'Invalid request' });
        }

        // Create a new reaction object
        const newReaction = {
            reactionBody,
            username     
        };

        // Find the thought by its ID and push the new reaction to its reactions array
        Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: newReaction } },
            { new: true, runValidators: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'Thought not found' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    },

    // Remove a reaction by its ID
    deleteReactionById(req, res) {
        const { thoughtId, reactionId } = req.params;
        console.log(reactionId);
        // Check if reactionId is present
        if (!reactionId) {
            return res.status(400).json({ message: 'Invalid request' });
        }
        //

        // Find the reaction by its ID and remove it from the reactions array in the associated thought
        Thought.findByIdAndUpdate(
            thoughtId,
            { $pull: { reactions: { reactionId:reactionId } } },
            { new: true },
            //if deleted, return message successfully deleted reaction
            res.json({ message: 'Successfully deleted reaction' })
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'Thought not found' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    }
};
