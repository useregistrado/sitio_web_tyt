const TABLA = 'CONTRACT'

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
        
        const contract = {
            initial_date: body.date,
            address: body.address,
            customer_id: body.customer_id,
            plan_id: body.plan_id,
            additional_price: body.additional_price,
            
            }
        if(body.contract_id){
            plan.plan_id = body.contract_id
        }
        
        
        return store.upsert(TABLA, contract)

    }

    


    return {
        list,
        get,
        upsert,
        remove,
    }
}