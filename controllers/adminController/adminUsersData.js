const usersData = require("../../Models/user-Modal");

const getAllUserData = async (req, res) => {
  const isAdmin = req.user.isAdmin;
  if (isAdmin) {
    try {
      const response = await usersData.find({},{password:0});
      res.status(200).json({ data: response });
    } catch (error) {
      res.status(400).json({ message: "didn't got the data" });
    }
  } else {
    res.status(400).json({ message: "your are not an admin." });
  }
};

const deleteUserData = async (req, res) => {
  const adminId = req.id.toString();
  const adminID = adminId.replace("ObjectId('", "").replace("')", "");
  const id = req.params.id;

  if (adminID === id) {
    res.status(200).json({ message: "Can't delete Your self" });
  } else {
    const response = await usersData.deleteOne({ _id: id });
    res.status(200).json({ message: "deleted", data: response });
  }
  // const operationData = await usersData.findOne({_id:id})
  // const operationalEmail = await user
};
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await usersData.findOne({ _id: id }, { password: 0 });
    res.status(200).json({ data: userData });
  } catch (error) {
    res.status(200).json({ data: error });
  }
};
const upateUserdata = async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const id = req.params.id;
    console.log(id);

    const response = await usersData.updateOne({ _id: id }, { $set: data });
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(401).json({ message: "error occured" });
  }
};

module.exports = { getAllUserData, deleteUserData, upateUserdata, getUserById };
