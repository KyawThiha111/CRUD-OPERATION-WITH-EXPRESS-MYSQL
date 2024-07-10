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
})

module.exports = model("posts", PostSchema)