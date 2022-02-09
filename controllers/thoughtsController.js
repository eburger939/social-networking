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
            return User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: {thoughts: thought._id}},
                { new: true}
                
            );
            res.json(newThought)
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
            res.json(delThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },



}