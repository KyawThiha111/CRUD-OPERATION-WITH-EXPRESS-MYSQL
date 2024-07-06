const MongoDB = require("mongodb");
require("dotenv").config();
const MongoClient = MongoDB.MongoClient;

exports.MongoConnector = ()=>{
    MongoClient.connect(process.env.Mongo_URL).then(result=>{
        console.log(result)
        console.log("Success");
    }).catch(err=>{
        console.log(err)
    })
}