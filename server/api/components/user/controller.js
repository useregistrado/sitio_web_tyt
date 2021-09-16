const store = require('../../../store/dummys')
const auth = require('../auth')
const TABLA = 'user'

module.exports =function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('./index')
    }

    function list() {
        return store.list(TABLA)
    }
    
    function get(id){
        
        return store.getregistro(TABLA, id)
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