const bcrypt = require('bcrypt')
const auth = require('../../../auth')
const TABLA = 'AUTH'

module.exports = function (injectedStore) {
    let store = injectedStore
    if (!store) {
        store = require('../../../store/mysql')
    }

    async function login(username, password){
        const data = await store.query(TABLA, { username: username })

        return bcrypt.compare(password, data.password)
            .then(sonIguales=>{
                if (sonIguales === true){
                    // Generar token
                    return auth.sign(data)
                }else {
                    throw new Error('Informacion invalida')
                }
                return data
            })
        
    }

    async function upsert(data) {
        const authData = {
            username: data.username,
            password: await bcrypt.hash(data.password,3)
        }

        return store.upsert(TABLA, authData)
    }

    return {
        upsert,
        login,
    }
}
