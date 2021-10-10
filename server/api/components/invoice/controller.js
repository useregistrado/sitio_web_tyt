const TABLA = 'INVOICE'

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
        
        const invoice = {
            generation_date: body.generation_date,
            amount: body.amount,
            additional_amount: body.additional_amount,
            payment_status: body.payment_status,
            contract_id: body.contract_id,
            
            }
        if(body.invoice_id){
            invoice.invoice_id = body.invoice_id
        }
        
        
        return store.upsert(TABLA, invoice)

    }

    


    return {
        list,
        get,
        upsert,
        remove,
    }
}