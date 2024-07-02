const {Sequelize,DataTypes, NUMBER, STRING, INTEGER} = require("sequelize");
const {database} = require("../utils/database")

const Posts = database.define('posts',{
    username:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    age: {
        type: INTEGER,
        allowNull:false
    },
    description:{
        type:STRING,
        allowNull:false
    },
    id:{
       type: INTEGER,
       allowNull:false,
       autoIncrement: true,
       primaryKey:true
    }
})

module.exports = Posts;