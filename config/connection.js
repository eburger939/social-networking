const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost/socialNetwork';

connect(connectionString, {

});

module.exports = connection;
