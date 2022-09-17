
const {customerRepository} = require('../database');

class CustomerService {
    
    constructor () {
        this.repository = new customerRepository;
    }

    async signUp (userInput) {
        
         const {email, password, username, phone} = userInput;

        try {
            const createCustomer = this.repository.createCustomer({email,password,username,phone});

            return createCustomer;

        } catch (error) {
            throw error
        }


    }
}

module.exports = CustomerService