var mysql = require('mysql');
var config = require('../config')

var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'dbproject',
    user     : 'root',
    password : '',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM customer', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

function list(){
    return new Promise( (resolve, reject) => {
        connection.query('SELECT * FROM customer', (error, data) => {
            if (error) return reject(error)
            resolve(data)
        })
    })
}

module.exports = {
    list,
}