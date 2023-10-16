
import './Register.css';
import React, { useState } from "react";
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import * as request from '../../utils/request';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  }

  const handleRegister = async (e) => {
    const body = {
      'name': name,
      'email': email,
      'password': password,
    }
    try {
      const response = await request.post('/register', body);

      if( response.status ){
        setMessage(response.message);
      }
      else{
        setMessage("Đăng ký không thành công!")
        console.log(response.errors);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="register-container">
      <h3>Đăng ký</h3>
      { message && <p className='message'>{message}</p> }
      <div className="form-group">
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          placeholder='Tên đăng nhập'
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="eamail"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type={ passwordVisible ? 'text' : 'password' }
          id="password"
          name="password"
          value={password}
          placeholder='Mật khẩu'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p onClick={togglePasswordVisible}>
          { passwordVisible ? <FaEyeSlash/> : <FaEye/>  }
        </p>
      </div>
      <button type='button' onClick={handleRegister}>Đăng ký</button>
      <div className='link-login'>
        <span>Bạn đã có tài khoản</span>
        <a href='/login'>Đăng nhập</a>
      </div>
    </div>
  );
}

export default Register;
