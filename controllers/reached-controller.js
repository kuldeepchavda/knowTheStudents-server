const reachedUsers = require("../Models/reachus-model")
const reachUsfn = async (req, res) => {
  const { email, message } = req.body;
  try {
    const response = await reachedUsers.create({ email, message });
    console.log(email,message)
    res
      .status(200)
      .json({ message: "data uploaded succesfully", status: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
  // res.status(200).json({message:"Reached User data"})
};

module.exports = reachUsfn