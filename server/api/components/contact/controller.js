
const TABLA = 'CONTACT'

module.exports =function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('./index')
    }

    function list() {
        return store.list(TABLA)
    }
    

    function remove(id){     
        return store.remove(TABLA, id)
    }

    

    async function upsert(body) {
        
        const contact = {
            name: body.name,
            phone_number: body.phone_number,
            }
        
        return store.upsert(TABLA, contact)

    }

    


    return {
        list,
        upsert,
        remove,
    }
}