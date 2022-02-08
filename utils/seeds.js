const connection = require('../config/connection')
const { User, Thought } = require('../models');

const arr = [
    {
        username: 'user7',
        email: 'user7@gmail.com',
    },
    {
        username: 'user2',
        email: 'user2@gmail.com',
    },
    {
        username: 'user3',
        email: 'user3@gmail.com',
    },
    {
        username: 'user4',
        email: 'user4@gmail.com',
    },
]

const thoughtArry = [
    {
        thoughtText: 'Is it almost time for lunch',
        username: 'user1',
        reactions: [],
    },
    {
        thoughtText: 'I need to take my dog out',
        username: 'user2',
        reactions: [],
    },
    {
        thoughtText: 'My next homework is due tomorrow ',
        username: 'user3',
        reactions: [],
    },
    {
        thoughtText: 'My nephews birthday is tomorrow',
        username: 'user4',
        reactions: [],
    },
    {
        thoughtText: 'I cant wait to move from IL',
        username: 'user5',
        reactions: [],
    },

]

connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('connected')
    // await User.insertMany(arr);
    await Thought.insertMany(thoughtArry)
    process.exit(0)
})



