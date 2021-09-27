const auth = require('../../../auth')

module.exports = function checkAuth(action){

    function middleware(req, res, next){
        switch (action) {
            case 'update':
                console.log('__'+JSON.stringify( req.body))
                const owner = req.body.customer_id
                auth.check.own(req, owner)
                next()
                break;

        
            default:
                next()
        }
    }

    return middleware
}