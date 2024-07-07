const MongoDB = require("mongodb");
require("dotenv").config();
const MongoClient = MongoDB.MongoClient;

let db;
exports.MongoConnector = ()=>{
    MongoClient.connect(process.env.MONGO_URL).then(result=>{
        /* result always has .db method. */
        console.log(result)
        db = result.db();
        console.log("Success");
    }).catch(err=>{
        console.log(err)
    })
}

exports.getDatabase = ()=>{
    if(db){
        return db
    }
    throw "No Database";
}