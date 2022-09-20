const CustomerService = require('../services/customer-service');

module.exports = (app) => {
    const service = new CustomerService();

    app.post('/signup', async(req, res, next) => {
        try {
            const {email, password, phone, username} = req.body;
            const {data} = await service.signUp({email, password, phone, username});
            return res.json({data})
        } catch (error) {
            next(error)
        }
    });

    app.post('/login', async(req, res, next) => {
        try {
            const {email, password} = req.body;
            const {data} = await service.login({email, password});
            return res.json({data})
        } catch (error) {
            next(error)
        }
    })

    app.get('/getprofile/:_id', async(req, res, next) => {
        try {
            const id = req.params._id;
            const {data} = await service.getUser(id);
            return res.json(data);
        } catch (error) {
            throw error
        }
    });

}