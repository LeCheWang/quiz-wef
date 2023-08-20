import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import signupImage from "../asset/images/signup.png";
import {
  LockOutlined,
  MailOutline,
  Person2Outlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

export default function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSignup = () => {
    // call api
    console.log(signupData);
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="signup-page">
        <h1 className="signup-page__title">CREATE AN ACCOUNT!</h1>
        <div className="signup-page__main">
          <img src={signupImage} alt="Signup" />
          <div>
            <Box
              sx={{
                width: "600px",
                backgroundColor: "#fff",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: "10px",
                px: 2,
                py: 3,
              }}
            >
              <FormControl sx={{ width: "100%", my: 2 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">
                  Username
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-username"
                  type="email"
                  value={signupData.username}
                  onChange={(e) =>
                    setSignupData({ ...signupData, username: e.target.value })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Person2Outlined />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Email"
                />
              </FormControl>
              <FormControl sx={{ width: "100%", my: 2 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <MailOutline />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Email"
                />
              </FormControl>
              <FormControl sx={{ width: "100%", my: 2 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{ width: "100%", my: 2 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-confirmPass">
                  Confirm password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirmPass"
                  type="password"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <LockOutlined />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm password"
                />
              </FormControl>
              <div className="signup-btn" onClick={handleSignup}>
                sign up
              </div>
              <div className="user-login">
                Already have an account?
                <Link to="/login">
                  <span
                    style={{
                      color: "#3b82f6",
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    Login{" "}
                  </span>
                </Link>
                instead.
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
