const Users = require("../models/users");

const controller = {}

//////////////////////////////////////////////////////////////////////////////////
//Busca todos os usuários da lista
controller.getAll = async (req, res) => {
    try {
        const Users_0 = await Users.findAll({

        })

        res.status(200).send(Users_0);
        console.log(Users_0)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}
//////////////////////////////////////////////////////////////////////////////////
//Busca todos os usuários da lista
controller.post = async (req, res) => {
    try {
        const Users_0 = await Users.findAll({

        })

        res.status(200).send(Users_0);
        console.log(Users_0)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}
//////////////////////////////////////////////////////////////////////////////////

module.exports = controller