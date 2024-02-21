const sequelize = require("sequelize");

const connection = new sequelize("proj_back_front_end", "root", "123456",{
    host: "localhost",
    dialect: "mysql",
    define:{
        timestamps: false,
        freezeTableName: true 
    }
});

connection.authenticate().then(() => {
    console.log("Conexão estabelecida com o banco de dados.");
}).catch((error) => {
    console.error('Erro ao tentar se conectar com  o servidor', error);
})

module.exports = connection