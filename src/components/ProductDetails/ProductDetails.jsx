import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({match}) => {

    const [quantity, setQuantity] = useState(1);

    const handleInputChange = function(e){
        const value = parseInt(e.target.value, 10)
        if(!isNaN(value) && value>0 && value<500){
            setQuantity(value);
        }
        setQuantity(value);
    }

    return (
        <div className='product-details'>
            <div className='container'>
                <div className='left'>
                    <img src='/images/sliders/slider1.jpg' alt='I love you'></img>
                </div>
                <div className='right'>
                    <div className='name'>
                        Compo 500GR gồm bánh tròn phơi sương loại mỏng
                        đặc biệt + Hủ muối tép hành nguyên chất 100% siêu ngon
                    </div>
                    <div className='evaluate-sold'>
                        <span>4.8</span>
                        <span>5,8k Đánh giá</span>
                        <span>19.6k Đã bán</span>
                    </div>
                    <div className='price'>
                        <span className='cost'>
                            <del>đ82.000 - đ250.000</del>
                        </span>
                        <span className='discount'>
                            đ74.300 - đ198.000
                        </span>
                    </div>
                    <div className='classify-quantity'>
                        <div className='transport'>
                            <span>Vận chuyển</span>
                            <div>
                                <div>
                                    <span>Vận chuyển tới</span>
                                    <span>Phường Hòa Quý, Quận Ngũ Hành Sơn</span>
                                </div>
                                <div>
                                    <span>Phí vận chuyển</span>
                                    <span>đ 22.000 - đ 36.450</span>
                                </div>
                            </div>
                        </div>
                        <div className='quantity'>
                            <span>Số lượng</span>
                            <div>
                                <input 
                                type='number'
                                value={quantity}
                                min={1}
                                max={500}
                                onChange={handleInputChange}
                                className="custom-input-number"
                                />
                                <span>143 sản phẩm sẵn có</span>
                            </div>
                        </div>
                    </div>
                    <div className='addcart-buynow'>
                        <button>Thêm vào giỏ hàng</button>
                        <button>Mua ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;