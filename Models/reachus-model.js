const {Schema,model} = require("mongoose")

const reachUsModel = new Schema({
    email:{
    type:String,
    required:true
    },
    message :{
        type : String,
        required:true
    }
})

const reachedUsers = new model("reachedUsersCollection",reachUsModel);

module.exports = reachedUsers