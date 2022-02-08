const connection = require('../config/connection')
const { User, Thoughts } = require('../models');

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

connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('connected')
    await User.insertMany(arr);
    process.exit(0)
})



