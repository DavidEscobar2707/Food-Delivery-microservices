
const {customerRepository} = require('../database');
const { ApiError, BadRequestError } = require('../utils/app-error');
const {FormateData, GenerateSalt, GeneratePassword, GenerateSignature} = require('../utils')

class CustomerService {
    
    constructor () {
        this.repository = new customerRepository();
    }

    async signUp (userInput) {
         const {email, password, phone, username} = userInput;
        try {
            let salt = await GenerateSalt();
            let userPassword = await GeneratePassword(password, salt);

            const createCustomer = await this.repository.createCustomer({email,password:userPassword,phone, username});

            let token = await GenerateSignature({email: email, id: createCustomer._id})

            return FormateData({id: createCustomer._id, token});
            
        } catch (error) {
            console.log(error)
            throw new ApiError('Unable to create a customer')
        }
    }

    async login(userInput) {
        try {
            const {email, password} = userInput;
            const customerResponse = await this.repository.findCustomer({email});

            if(customerResponse.password !== password) {
                return FormateData(null)
            }

            return FormateData(customerResponse);
        } catch (error) {
            throw new BadRequestError('Email or password are not correct')
        }
    }

    async getUser(id) {
        try {
            const customerResponse = await this.repository.getCustomer(id);
            return FormateData(customerResponse)
        } catch (error) {
            throw new ApiError('Data not found')
        }
    }
}

module.exports = CustomerService