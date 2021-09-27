
const TABLA = 'PLAN'

module.exports =function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('./index')
    }

    function list() {
        return store.list(TABLA)
    }
    
    function get(id){     
        return store.get(TABLA, id)
    }

    function remove(id){     
        return store.remove(TABLA, id)
    }

    

    async function upsert(body) {
        
        const plan = {
            name: body.name,
            megabytes: body.megabytes,
            basic_price: body.basic_price,
            install_price: body.install_price,
            location_type: body.location_type,
            service_type: body.service_type,
            }
        if(body.customer_id){
            plan.plan_id = body.customer_id
        }
        
        
        return store.upsert(TABLA, plan)

    }

    


    return {
        list,
        get,
        upsert,
        remove,
    }
}