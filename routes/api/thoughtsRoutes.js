const router = require('express').Router()
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers')



router.route('/').get(getThoughts).post(createThought);


router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);


router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);


module.exports = router;