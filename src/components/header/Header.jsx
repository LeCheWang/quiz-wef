import React from "react";
import logo from "../../asset/images/logo.png";
import {
  HistoryOutlined,
  LoginOutlined,
  LogoutOutlined,
  Mood,
  NightlightOutlined,
  Person2Outlined,
  PersonAddOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  // get user
  const user = JSON.parse(localStorage.getItem("myQuizApp"));

  const handleLogout = () => {
    // handle api
    localStorage.removeItem("myQuizApp");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-left" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <h2>quizzy</h2>
      </div>
      <div className="header-right">
        <div className="header-right__menu">
          <p onClick={() => navigate("/")}>home</p>
          <p onClick={() => navigate("/quiz")}>quizzies</p>
          <p onClick={() => navigate("/about")}>about</p>
        </div>
        <div className="header-right__icon">
          {user ? (
            <p className="item-icon icon-mood">
              <Mood style={{ fontSize: 36 }} />
              <div className="menu-item">
                <p>
                  <Person2Outlined sx={{ mr: 1 }} />
                  <span>My Profile</span>
                </p>
                <p>
                  <HistoryOutlined sx={{ mr: 1 }} />
                  <span>Submissions</span>
                </p>
                <p onClick={handleLogout}>
                  <LogoutOutlined sx={{ mr: 1 }} />
                  <span>Logout</span>
                </p>
              </div>
            </p>
          ) : (
            <div className="item-btn">
              <button
                type="button"
                className="border-btn"
                onClick={() => navigate("/login")}
              >
                <LoginOutlined sx={{ mr: 1 }} />
                Log In
              </button>
              <button
                type="button"
                className="border-btn"
                onClick={() => navigate("/signup")}
              >
                <PersonAddOutlined sx={{ ml: 1 }} />
                Sign up
              </button>
            </div>
          )}
          <p className="item-icon">
            <NightlightOutlined
              style={{ fontSize: 36, marginLeft: "0.8rem" }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
