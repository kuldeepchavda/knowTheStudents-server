
const userData = require("../../Models/user-Modal")
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await usersData.findOne({ _id: id }, { password: 0 });
    res.status(200).json({ data: userData });
  } catch (error) {
    res.status(200).json({ data: error });
  }
};
