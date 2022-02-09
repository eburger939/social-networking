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
    // async createThought(req, res) {
    //     try {
    //         const newThought = await Thought.create(req.body)
    //         return User.findOneAndUpdate(
    //             { username: req.body.username },
    //             { $addToSet: {thoughts: thought._id}},
    //             { new: true}
                
    //         );
    //         res.json(newThought)
    //     } catch (err) {
    //         console.log(err)
    //         res.status(500).json(err)
    //     }
    // },
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => {
            return User.findOneAndUpdate(
              { username: req.body.username },
              { $addToSet: { thoughts: thought._id } },
              { new: true }
            );
          })
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'Application created, but found no user with that ID',
                })
              : res.json('Created the application')
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
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
    // async deleteThought (req, res) {
    //     try {
    //         const delThought = await Thought.findOneAndRemove({ _id: req.params.thoughtId})
    //         res.json(delThought)
    //     } catch (err) {
    //         console.log(err)
    //         res.status(500).json(err)
    //     }
    // },

    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : User.findOneAndUpdate(
                  { thoughts: req.params.thoughtId },
                  { $pull: { thoughts: req.params.thoughtId } },
                  { new: true }
                )
          )
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'Thought deleted but no user with this id!',
                })
              : res.json({ message: 'Thought successfully deleted!' })
          )
          .catch((err) => res.status(500).json(err));
      },

    async addReaction(req, res) {
        try {
            const addRx = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reaction: req.body}},
                {new: true}
            )
            res.json(addRx)
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
       },


}