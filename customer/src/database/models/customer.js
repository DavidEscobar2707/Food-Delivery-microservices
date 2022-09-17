const mongoose = require('mongoose');

const Schema = mongoose.Schema

const customerSchema = new Schema({
    email: { type: String, require: [true, "email is mandatory"], unique: true},
    username: { type: String, require: [true, "Username is mandatory"], unique: true},
    password: { type: String, require: [true, "password is mandatory"]},
    name: String,
    phone: String,
    salt: String,
    cart: [{
        product: {
            _id: { type: String, require: true},
            description: String,
            banner: String,
            price:Number
        },
        unit: { type: Number, require: true}
    }],
    orders: [ 
        { 
            _id: { type: String, require: true},
            amount: String,
            date: {type: Date, default: Date.now()}

        }
    ]
});

module.exports = mongoose.model('customer',customerSchema);