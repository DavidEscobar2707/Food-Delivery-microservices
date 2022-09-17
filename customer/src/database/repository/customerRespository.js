const {customerModel} = require('../models');

class CustomerRepository {
    async createCustomer({email,password,phone,username}){
        try {
            const customer = new customerModel({
                email,
                password,
                username,
                phone
            });
            const customerResults = await customer.save();
            return customerResults;
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports = CustomerRepository;
