const db = require('../../../../models');

const { User } = db;


var UserController = {
    getUsers: async (req, res) => {
        let result = await User.findAll();
        return res.send({ status: 200, message: 'Users has been fetched successfully', data: result });
    },
    createUser: async (req, res) => {
        try {
            let data = req.body;
            let object = {
                first_name: data.first_name,
                last_name: data.last_name,
            }
            let resultAll = await User.create(object);
            if (resultAll) {
                return res.send({ 'message': resultAll });
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserController;