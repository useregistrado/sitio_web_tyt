
const TABLA = 'LOG'

module.exports =function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('./index')
    }

    function list() {
        return store.list(TABLA)
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
        
    }
}