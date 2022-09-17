const CustomerService = require('../services/customer-service');

module.exports = (app) => {
    const service = new CustomerService();

    app.post('/signUP', async(req, res, next) => {
        try {
            const {email, password, userName, phone} = req.body;
            console.log(email)

            const {data} = await service.signUp({email, password, userName, phone});
            return res.json(data)
        } catch (error) {
            next(error)
        }
    }) 
}