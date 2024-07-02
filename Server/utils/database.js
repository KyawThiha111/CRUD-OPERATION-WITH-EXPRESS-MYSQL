const {Sequelize} = require("sequelize");

const database = new Sequelize("codehubdb","root","kyawthiha123",{
    host: "localhost",
    dialect : "mysql"
})

module.exports = {database}