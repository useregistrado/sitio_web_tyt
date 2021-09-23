
const mysql = require('mysql2');
const config = require('../config')

const dbConfig ={
    host     : config.mysql.host,
    database : config.mysql.database,
    user     : config.mysql.user,
    password : config.mysql.password,
}

let connection

function handlecon(){
    connection = mysql.createConnection(dbConfig)

    connection.connect((err)=>{
        if(err){
            console.error('[db error]', err)
            setTimeout(handlecon, 2000)
        }else {
            console.log('DB Connected!')
        }
    })

    connection.on('error', err=> {
        console.error('[db error]', err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handlecon()
        }else {}
    })
}

handlecon()



function query(table, query){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err,res)=>{
            if(err) return reject(err)
            resolve(res[0] || null)

        })
    })
}


function list(table){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, data) => {

            if (error) return reject(error)
            resolve(data)
        })
    })
}

function upsert(table, data){
    return new Promise( (resolve,reject)=>{
        connection.query(`INSERT INTO ${table} SET ?`,data, (err,result)=>{
            if(err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = {

    list,
    upsert,
    query,

}