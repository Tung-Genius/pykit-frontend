import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="customer-care">
                    <h2>Chăm sóc khách hàng</h2>
                    <div className="content">
                        <a href="/">Trung tâm trợ giúp</a>
                        <a href="/">Website block</a>
                        <a href="/">Hướng dẫn mua hàng</a>
                        <a href="/">Hướng dẫn bán hàng</a>
                        <a href="/">Thanh toán</a>
                        <a href="/">Vận chuyển</a>
                        <a href="/">Trả hàng & hoàn tiền</a>
                        <a href="/">Chăm sóc khách hàng</a>
                        <a href="/">Chính sách bảo hành</a>
                    </div>
                </div>
                <div className="about-myweb">
                    <h2>Về My website</h2>
                    <div className="content">
                        <a href="/">Tuyển dụng</a>
                        <a href="/">Chính sách bảo mật</a>
                        <a href="/">Chính hãng</a>
                        <a href="/">Kênh người bán</a>
                        <a href="/">Flash Sales</a>
                        <a href="/">Liên hệ với truyền thông</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;