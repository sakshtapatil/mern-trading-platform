const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  try {
    // check header first, then cookie
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ status: false, message: "No token found" });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Invalid token" });
      }
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.username, email: user.email });
      } else {
        return res.status(401).json({ status: false, message: "User not found" });
      }
    });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ status: false, message: error.message });
  }
};