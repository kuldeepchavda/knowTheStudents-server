const registrationData = require("../Models/user-Modal");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const rawToken = req.header("Authorization");
if (!rawToken) {
    return res.status(200).json({
      msg: "Token not Provided",
    });
  }
  const token = rawToken.replace("Bearer", "").trim();
  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if(!isVerified){
      res.status(200).json({message:"You are not authorized User"})
    }
    const userData = await registrationData.findOne({
      email: isVerified.email,
    });
    if (!userData) {
      console.log("failed to fetch Data");
    } else {
      // console.log("got the userData",userData);
    }
    req.user = userData;
    req.token = token;
    req.id = userData._id;
    // res.status(200).json({data:userData})
    next();
    // console.log(userData)
  } catch (err) {
    console.log("error in Authentication");
    res
      .status(401)
      .json({ msg:err });
  }
};

module.exports = authMiddleware;
