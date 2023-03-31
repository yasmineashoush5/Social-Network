const router = require('express').Router();
const {
    getReaction,
    getSingleReaction,
    createReaction,
    updateReaction,
    deleteReaction,
    addReaction,
    removeReaction,
} = require('../../controllers/reaction-controller');


// router.route('/').get(getReaction).post(createReaction);


router.route('/:reactionId').get(getSingleReaction).put(updateReaction).delete(deleteReaction);


router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;