const database = require("../utils/database");
module.exports = class Post{
    constructor(username,age,description,id){
        this.username = username,
        this.age = age,
        this.description = description,
        this.id = id
    }
    setPost(){
       return database.execute("INSERT INTO posts(username,age,description) VALUES(?,?,?)",[this.username,this.age,this.description])
    }
    static getDataFun(){
        return database.execute("SELECT * FROM posts");
    }

    static getEachData(id){
        return database.execute("SELECT * FROM posts WHERE id=?",[id])
    }
}