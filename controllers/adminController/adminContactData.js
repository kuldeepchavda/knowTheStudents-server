const reachedUsers = require("../../Models/reachus-model") 

const getAllContactsData = async(req,res)=>{
try {
    const response = await reachedUsers.find({})
    res.status(200).json({data:response})
} catch (error) {
    
}
}

module.exports ={getAllContactsData}