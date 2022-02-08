const { Schema, model } = require('mongoose')



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
        },
        id: false,
    }
);

userSchema
.virtual('reactionCount')
.get(function () {
    return `This user has ${this.reactions.length} reactions`;
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought;