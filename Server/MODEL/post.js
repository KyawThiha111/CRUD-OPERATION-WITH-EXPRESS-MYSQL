const {Schema,model} = require("mongoose");

const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    blog:{
        type: String,
        required: true
    },
    userid:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required: "true"
    }
},{timestamps:true})

module.exports = model("posts", PostSchema)