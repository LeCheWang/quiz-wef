import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import login from "../asset/images/login.png";
import { MailOutline, Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    // handle api?
    const data = {
      email: loginData.email,
      password: loginData.password,
    };
    if (loginData.email !== " " && loginData.password !== "") {
      localStorage.setItem("myQuizApp", JSON.stringify(data));
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-page">
        <h1 className="login-page__title">ĐĂNG NHẬP CHƠI QUIZZY NGAY!</h1>
        <div className="login-page__main">
          <img src={login} alt="Log In" />
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
                <InputLabel htmlFor="outlined-adornment-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
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
                  Mật khẩu
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
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
                  label="Mật khẩu"
                />
              </FormControl>
              <Typography
                sx={{ textAlign: "right", color: "#3b82f6", fontSize: "18px" }}
              >
                Quên mật khẩu?
              </Typography>
              <div className="login-btn" onClick={handleLogin}>
                đăng nhập
              </div>
              <div className="user-signup">
                Bạn chưa có tài khoản?
                <Link to="/signup">
                  <span
                    style={{
                      color: "#3b82f6",
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    Đăng ký{" "}
                  </span>
                </Link>
                ngay.
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
