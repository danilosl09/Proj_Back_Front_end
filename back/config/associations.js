const Users = require("../models/users.js");
const db = require("../config/dbconnection.js")


db.sync({force: false})

module.exports = {Users}