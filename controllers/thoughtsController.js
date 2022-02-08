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



}