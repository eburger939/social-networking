const { Schema, model } = require('mongoose')

const validateEmail = function(email) {
    const emailT = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emailT.test(email) 
}


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true,
        },
        email: {
            type: String,
            required: 'Email address is required',
            unique: true,
            valdidate: [validateEmail, 'Please add a valid email address'],
            // match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please add a valid email address']

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
                //name of the model that we define 
                //populate needs to speak on the field name (thoughts)
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
.virtual('friendCount')
.get(function () {
    return `This user has ${this.friends.length} friend(s)`;
})

const User = model('user', userSchema)

module.exports = User;