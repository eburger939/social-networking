const { User, Thoughts } = require('../models');

const arr = [
    {
        username: 'user1',
        email: 'user1@gmail.com',
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
User.insertMany(arr);
