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


// Devuelve todos los registros de la tabla que se le pasen por parametros a la función
function findAll(table){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, data) => {
            if (error) return reject(error)
            resolve(data)
        })
    })
}

// Obtiene un registro, recibe el nombre de la tabla y el id del registro que se desaea obtener
function findOne(table, id){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ${table}_id = ${id}`, (error, data) => {
            if (error) return reject(error)
            resolve(data)
        })
    })
}


/*
 * Un ejemplo de llamado a la función es:
 * findByColumn(customer,  "email", "=","'oscar.vargas07@uptc.edu.co'")
 * Genera una consulta así:
 * SELECT * FROM customer WHERE email = 'oscar.vargas07@uptc.edu.co'
 * La idea de esta función es parametrizar una consulta con un WHERE de una condicion
*/
function findByColumn(table, column, operator, value ){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ${column} ${operator} ${value}`, (error, data) => {
            if (error) return reject(error)
            resolve(data)
        })
    })
}


/*
 * Un ejemplo de llamado a la función es:
 * findByColumns(customer, ["customer_id", "email"], [">", "="], [1, "'oscar.vargas07@uptc.edu.co'"])
 * Genera una consulta así:
 * SELECT * FROM customer WHERE customer_id > 1 and email = 'oscar.vargas07@uptc.edu.co'
 * La idea de esta función es para metrizar una consulta con un WHERE de dos condiciones
*/
function findByColumns(table, columns, operators, values ){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ${columns[0]} ${operators[0]} ${values[0]} and ${columns[1]} ${operators[1]} ${values[1]}`, (error, data) => {
            if (error) return reject(error)
            resolve(data)
        })
    })
}

module.exports = {
    findAll,
    findByColumn,
    findByColumns,
    findOne
}