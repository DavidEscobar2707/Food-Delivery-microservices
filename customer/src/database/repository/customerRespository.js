const {CustomerModel} = require('../models');
const {ApiError, BadRequestError ,ERROR_CODES} = require('../../utils/app-error');

class CustomerRepository {
    async createCustomer({email,password,phone,username}){
        try {
            const customer = new CustomerModel({
                email,
                password,
                phone,
                username,
            });
            const customerResults = await customer.save();
            return customerResults;
        } catch (error) {
            throw new ApiError('Api Error', ERROR_CODES.INTERNAL_ERROR, `Unable to create customer`);
        }
    }

    async getCustomer(id){
        try {
            return await CustomerModel.findById(id);
        } catch (error) {
            throw BadRequestError('Customer not found', ERROR_CODES.NOT_FOUND, 'Costumer does not exist');
        }
    }

    async findCustomer(email) {
        try {
            const customerResults = await CustomerModel.findOne(email);
            return customerResults;
        } catch (error) {
            throw new BadRequestError('Email not found', ERROR_CODES.NOT_FOUND, 'Costumer does not exist');
        }
        
    }
}

module.exports = CustomerRepository;
