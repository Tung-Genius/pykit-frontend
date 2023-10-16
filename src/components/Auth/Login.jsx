import "./Login.css";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as request from "../../utils/request";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [messageError, setMessageError] = useState("");


  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = {
        "email":email,
        "password":password,
      }
      const response = await request.post("/login", body);
      if( response.status){
        window.location.href = '/home';
      }else{
        setMessageError("Email hoặc mật khẩu không đúng!");
        console.log(response.message)
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="login-container">
      <h3>Đăng nhập</h3>
      { messageError && <p className="error">{messageError}</p> }
      <div className="form-group">
        <input
          text="text"
          id="email"
          name="email"
          value={email}
          placeholder="Email/Số điện thoại/Tên đăng nhập"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p onClick={togglePasswordVisible}>
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </p>
      </div>
      <button 
        type="button"
        onClick={handleLogin}
      >
        Đăng nhập
      </button>
      <div className="forgot-password">
        <a href="/">Quên mật khẩu</a>
      </div>
      <div className="link-register">
        <span>Bạn chưa có tài khoản</span>
        <a href="/register">Đăng ký</a>
      </div>
    </div>
  );
}

export default Login;
