const { Thought, User, Reaction } = require('../models');

const reactionController = {

    getreaction(req, res) {
        Reaction.find()
            .sort({ createdAt: -1 })
            .then((dbReactionData) => {
                res.json(dbReactionData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getSingleReaction(req, res) {
        Reaction.findOne({ _id: req.params.reactionId })
            .then((dbReactionData) => {
                if (!dbReactionData) {
                    return res.status(404).json({ message: 'reaction cannot be found!' });
                }
                res.json(dbReactionData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    createReaction(req, res) {
        Reaction.create(req.body)
            .then((dbReactionData) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { reaction: dbReactionData._id } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'Reaction created but no user with this id!' });
                }

                res.json({ message: 'Reaction is created successfully!' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    updateReaction(req, res) {
        Reaction.findOneAndUpdate({ _id: req.params.reactionId }, { $set: req.body }, { runValidators: true, new: true })
            .then((dbReactionData) => {
                if (!dbReactionData) {
                    return res.status(404).json({ message: 'No reaction with this id!' });
                }
                res.json(dbReactionData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    deleteReaction(req, res) {
        Reaction.findOneAndRemove({ _id: req.params.reactionId })
            .then((dbReactionData) => {
                if (!dbReactionData) {
                    return res.status(404).json({ message: 'No reaction with this id!' });
                }


                return User.findOneAndUpdate(
                    { reaction: req.params.reactionId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'Reaction created but no user with this id!' });
                }
                res.json({ message: 'Reaction successfully deleted!' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // add a reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // remove reaction from a thought
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = reactionController;