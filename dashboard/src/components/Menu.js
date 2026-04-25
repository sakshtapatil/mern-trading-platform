import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
  try {
    const token = localStorage.getItem("token"); // ✅ get token
    if (!token) {
      window.location.href = "https://mern-tradingplatform.netlify.app/login";
      return;
    }
    const { data } = await axios.post(
      "https://mern-trading-platform-d93o.onrender.com/",
      {},
      { 
        headers: { Authorization: `Bearer ${token}` }, // ✅ send token in header
        withCredentials: true 
      }
    );
    if (data.status) {
      setUser(data.user);
      setEmail(data.email);
    } else {
      window.location.href = "https://mern-tradingplatform.netlify.app/login";
    }
  } catch (error) {
    console.error("Auth check failed:", error);
    window.location.href = "https://mern-tradingplatform.netlify.app/login";
  }
};
    fetchUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
  localStorage.removeItem("token"); // ✅ clear token
  window.location.href = "https://mern-tradingplatform.netlify.app/login";
};

  const getInitials = (name) => {
    if (!name) return "ZU";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* Profile Section */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{getInitials(user)}</div>
          <p className="username">{user || "Loading..."}</p>

          {/* Dropdown */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <div className="avatar-large">{getInitials(user)}</div>
                <div>
                  <p className="dropdown-username">{user}</p>
                  <p className="dropdown-email">{email}</p>
                </div>
              </div>
              <hr />
              <ul className="dropdown-menu">
                <li onClick={handleLogout} className="logout">
                  🚪 Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;