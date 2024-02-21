const DataTypes = require("sequelize");
const db = require("../config/dbconnection");

const Users = db.define('users', {

    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_birth: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

(async () => {
    try {
        await Users.sync({force: false});
        console.log("Tabela de Usuário criada comsucesso!");
    }catch (error) {
        console.error("Não foi possível conectar-se ao banco de dados: ", error)
    }
})();

module.exports = Users;