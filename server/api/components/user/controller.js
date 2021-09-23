
const auth = require('../auth')
const TABLA = 'CUSTOMER'

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
        console.log(body)
        const user = {
            name: body.name,
            username: body.document,
            document_type: body.document_type,
            document: body.document,
            phone_number: body.phone_number,
            email: body.email,
            billing_email: body.billing_email,
            }
        
        if (body.password || user.username){
            
            await auth.upsert({
                username: user.username,
                password: body.password               
            })       
        }

        return store.upsert(TABLA, user)

    }

    return {
        list,
        get,
        upsert,
    }
}