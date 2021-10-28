module.exports = {

  api: {
    port: process.env.API_PORT || 3000,
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!'
  },

  mysql: {
    host     : 'localhost',
<<<<<<< HEAD
    database : 'dbproject',
    user     : 'fazt',
    password : 'password',
=======
    database : 'tytdb',
    user     : 'root',
    password : 'myt&t2021_Pass',
>>>>>>> 27ecbeb83d1d0d90f92923d986b22a15198e3eeb
    
  }
}

