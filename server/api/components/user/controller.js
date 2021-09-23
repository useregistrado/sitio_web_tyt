

const auth = require('../auth')
const TABLA = 'CUSTOMER'


module.exports =function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('./index')
    }

    function list() {

        return store.findAll(TABLA)
        //return store.findByColumns(TABLA, ["customer_id", "email"], [">", "="], [1, "'oscar.vargas07@uptc.edu.co'"])

    }
    
    function get(id){
        
        return store.findOne(TABLA, id)
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