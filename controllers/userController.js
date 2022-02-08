const { User, Thought } = require('../models')


module.exports = {

    async getUsers(req, res) {
        try {
            const findUser = await User.find()
            res.status(200).json(findUser)
        }

        catch (err) {
            console.log(err)
            res.status(500).json(err)

        }
    },
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body)
            res.json(newUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getSingleUser(req, res) {
        try {
            const singleUser = await User.findOne({_id: req.params.userId})
            res.json(singleUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteUser (req, res) {
        try {
            const delUser = await User.findOneAndRemove({ _id: req.params.userId})
            res.json(delUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async addFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: {friends: req.params.friendId }},
                { new: true }
            )
            res.json(newFriend)
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async removeFriend(req, res)
 {
     try {
         const deleteFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: {friends: req.params.friendId }},
            { new: true }
         )
         res.json(deleteFriend)
         console.log(deleteFriend)
     } catch(err) {
         console.log(err)
         res.status(500).json(err)
     }
    
    }



}

