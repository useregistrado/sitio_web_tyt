module.exports = {

  api: {
    port: process.env.API_PORT || 3000,
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!'
  },

  mysql: {
    host     : 'localhost',
    database : 'tytdb',
    user     : 'root',
    password : 'myt&t2021_Pass',
    
  }
}

