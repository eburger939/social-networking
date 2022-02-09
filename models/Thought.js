const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')
// const moment = require('moment')



const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Username is required',
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: (createdAt) => moment(createdAt).format('LLL')
          },
        username: {
            type: String,
            required: 'Username is required'
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
    return `This user has ${this.reactions.length} reactions`;
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought;