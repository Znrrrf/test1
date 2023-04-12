const db = require("../models");
const userLogin = db.user_login;


module.exports = {
    getAllUser: async (req, res) => {
        try {
            const data = userLogin.findAll();
            res.status(200).send({
                status: true,
                data
            })
        } catch (err) {
            res.status(400).send(err);
        }
    }
}