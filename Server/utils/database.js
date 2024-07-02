const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "codehubdb",
    password: "kyawthiha123"
})

module.exports = pool.promise();