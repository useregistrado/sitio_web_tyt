const store = require('../../../store/mysql')
const auth = require('../auth')
const TABLA = 'customer'

module.exports =function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('./index')
    }

    function list() {

        return store.findByColumns(TABLA, "document")
        //return store.findByColumns(TABLA, ["customer_id", "email"], [">", "="], [1, "'oscar.vargas07@uptc.edu.co'"])

    }
    
    function get(id){
        
        return store.findOne(TABLA, id)
    }

    async function upsert(body) {
        
        const user = {
            name: body.name,
            username: body.username
        }
        
        if (body.password || body.username){
            
            await auth.upsert('user',{
                id: body.id,
                username: body.username,
                password: body.password
                
            })
           
        }

    }

    return {
        list,
        get,
        upsert,
    }
}