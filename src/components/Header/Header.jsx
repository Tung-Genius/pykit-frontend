import React from "react";
import "./Header.css";
import { BsBell, BsQuestionCircle, BsSearch, BsCart2 } from "react-icons/bs";
// import { RiEarthLine } from "react-icons/ri";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = ({ showAuthLinks }) => {
  return (
    <div className="header-wrapper">
      <div className="hearder-navbar">
        <div className="header-navbar-menu">
          <ul>
            <li>Kênh người bán</li>
            <li>Trở thành người bán Shopee</li>
            <li>Tải ứng dụng</li>
            <li>Kết nối</li>
          </ul>
        </div>
        <div className="header-navbar-menu">
          <ul>
            <li>
              <BsBell className="icon" />
              Thông báo
            </li>
            <li>
              <BsQuestionCircle className="icon" />
              Hỗ trợ
            </li>
            <li>
              Tiếng Việt
              <IoIosArrowDropdown className="icon" />
            </li>
            {showAuthLinks ? (
              <>
                <li>
                    <a href="/register">Đăng ký</a>
                </li>
                <li>
                  <a href="/login">Đăng nhập</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <img src="./images/auth/user.jpg" alt="#" />
                  TungTran
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="hearder-navbar">
        <h1>Shopee</h1>
        <div className="search-wrapper">
          <input type="search" placeholder="Tìm kiếm sản phẩm..." />
          <button>
            <BsSearch />
          </button>
        </div>
        <h1>
          <BsCart2 />
        </h1>
      </div>
    </div>
  );
};

export default Header;
