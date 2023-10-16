import React from 'react'
import './CartItem.css'

function CartItem() {
  return (
    <div className='cart-item'>
        <div className='left'>
            <input type='checkbox'/>
            <div className='product-info'>
                <img src='/images/sliders/slider1.jpg' alt='Hello bạn'></img>
                <p>Nước hoa nam cao cấp chính hãng</p>
            </div>
        </div>
        <div className='right'>
            <div className='unit-price'>
                <p className='original-price'><del>đ359.000</del></p> 
                <p className='discount-price'>đ248.000</p>
            </div>
            <div className='quantity'>
                <input type='number' min={1} max={100}/>
            </div>
            <div className='amount-of-money'>
                đ248.000
            </div>
            <div className='operation'>
                <button>Xóa</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem