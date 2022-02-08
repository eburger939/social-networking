const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialNetwork', {

});

module.exports = connection;
