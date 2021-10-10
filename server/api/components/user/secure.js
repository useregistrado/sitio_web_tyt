const auth = require('../../../auth')
const user = require('./index')

module.exports = function checkAuth(action){

    function middleware(req, res, next){
        switch (action) {
            case 'update':
                console.log('__'+JSON.stringify( req.body))
                const owner = req.body.customer_id
                auth.check.own(req, owner)
                next()
                break;
            case 'listplan':
                
                next()
                break;
            case 'deleteplan':
                auth.check.sendtoken(req)
                next()
                break;

        
            default:
                next()
        }
    }

    return middleware
}