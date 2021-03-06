const router = require('express').Router()
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    addReaction,
    deleteReaction,
    updateThought,
} = require('../../controllers/thoughtsController')



router.route('/').get(getThoughts).post(createThought);


router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);


router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;