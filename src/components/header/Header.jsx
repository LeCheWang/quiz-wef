import React from "react";
import logo from "../../asset/images/logo.png";
import { Mood, NightlightOutlined } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="logo" />
        <h2>quizzy</h2>
      </div>
      <div className="header-right">
        <div className="header-right__menu">
          <p>home</p>
          <p>quizzies</p>
          <p>learn</p>
          <p>about</p>
        </div>
        <div className="header-right__icon">
          <p className="item-icon icon-mood">
            <Mood style={{ fontSize: 36 }} />
            <div className="menu-item">
              <p>My Profile</p>
              <p>Submissions</p>
              <p>Login</p>
            </div>
          </p>
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
