const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, EXPIRES_IN } = require('../config')


module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt();
};
module.exports.GeneratePassword = async (password, salt) => {
        return await bcrypt.hash(password,salt)
};

module.exports.GenerateSignature = async (payload) => {
    return await jwt.sign(payload, JWT_SECRET, {expiresIn: EXPIRES_IN});
};

module.exports.FormateData = (data) => {
    if(data){
        return { data }
    }else{
        throw new Error('Data Not found!')
    }
}   

