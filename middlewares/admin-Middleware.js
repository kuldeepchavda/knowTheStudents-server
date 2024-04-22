const adminMiddleware = async (req, res, next) => {
  const isAdmin = req.user.isAdmin;
  if (isAdmin) {
    next();
    // res.status(300).json({j:req.user})
  } else {
    res.status(400).json({ msg: "is not an Admin" });
  }
};

module.exports = adminMiddleware;
