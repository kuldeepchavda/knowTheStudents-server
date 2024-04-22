const registeredData = require("../../Models/user-Modal")
const exploreAll = async (req, res) => {

    const userData = await registeredData.find({},{password:0})
    res.status(200).json({data:userData})

};
const exploreUserById = async (req, res) => {
  const id = req.params.id;
  const data = await registeredData.findOne({ _id: id }, { password: 0 });
  res.status(200).json({ data: data });
};

module.exports = { exploreUserById, exploreAll };