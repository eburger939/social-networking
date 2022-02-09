const { User, Thought } = require('../models')

module.exports = {
    async getThoughts(req, res) {
        try {
            const findThought = await Thought.find()
            res.status(200).json(findThought)
        }

        catch (err) {
            console.log(err)
            res.status(500).json(err)

        }
    },
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)
            const updatedUser = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: {thoughts: newThought._id}},
                { new: true}
                
            );
            res.json(updatedUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },


    async getSingleThought(req, res) {
        try {
            const singleThought = await Thought.findOne({_id: req.params.thoughtId})
            res.json(singleThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async deleteThought (req, res) {
        try {
            const delThought = await Thought.findOneAndRemove({ _id: req.params.thoughtId})
            const updateUser = await User.populate.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: delThought.thoughtId } },
                { new: true }
            )
            res.json(updateUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },


    async addReaction(req, res) {
        try {
            const addRx = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {new: true}
            )
            res.json(addRx)
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
       },

    async deleteReaction (req, res) {
        try {
            const deleteRx = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: { reactionId: req.params.reactionId}}},
                {new: true}
            )
            res.json( {message: 'reaction deleted'})
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    }


}