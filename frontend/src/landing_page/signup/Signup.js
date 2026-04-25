import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!values.username.trim()) newErrors.username = "Full name is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Enter a valid email";
    if (!values.password) newErrors.password = "Password is required";
    else if (values.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",  // ✅ correct
        { ...values },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success("Account created successfully! 🎉");
        setTimeout(() => {
          window.location.href = "http://localhost:3000"; // ✅ redirect to dashboard
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const message = error.response?.data?.message || "Signup failed. Try again.";
      toast.error(message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button onClick={handleSubmit}>Create Account</button>

        <p>
          Already have an account?{" "}
          <span
            style={{ cursor: "pointer", color: "#387ed1" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;