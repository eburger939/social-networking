const { User, Thought } = require('../models')


module.exports = {

    async getUsers(req, res) {
        try {
        const findUser = await User.find()
        res.status(200).json(findUser)
        } 
        
        catch(err) {
         console.log(err)
         res.status(500).json(err)
     
        }
    },

    // getUsers(req, res) {
    //     User.find()
    //       .then((users) => res.json(users))
    //       .catch((err) => res.status(500).json(err));
    //   },




}

