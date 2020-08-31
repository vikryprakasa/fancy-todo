const bcrypt = require('bcrypt')


//register 
const createHash = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync({salat:10})) 
}


//login 
const compareHashes = (password, passwordHash) =>{
    return bcrypt.compareSync(password,passwordHash)
}


module.exports = { createHash, compareHashes }

