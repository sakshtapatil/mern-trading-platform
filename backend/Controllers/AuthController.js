const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

   res.cookie("token", token, {
  withCredentials: true,
  httpOnly: false,
  sameSite: "none",  // ✅ required for cross-domain cookies
  secure: true,      // ✅ required when sameSite is "none"
});
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });

    next();
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: error.message, success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect email or password", success: false });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
    });

    next();
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message, success: false });
  }
};

module.exports.userVerification = (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "No token found" });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Invalid token" });
      }

      const user = await User.findById(data.id);
      if (user) {
        return res.status(200).json({ status: true, user: user.username });
      } else {
        return res.status(401).json({ status: false, message: "User not found" });
      }
    });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ status: false, message: error.message });
  }
};