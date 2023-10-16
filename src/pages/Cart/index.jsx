import React from 'react'
import './Cart.css'
import CartItem from '../../components/Cart/CartItem'
import Header from "../../components/Header/Header";

function Cart() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='main'>
        <div className='thead'>
          <div className='thead-left'>
            Sản phẩm
          </div>
          <div className='thead-right'>
            <p>Đơn giá</p>
            <p>Số lượng</p>
            <p>Số tiền</p>
            <p>Thao tác</p>
          </div>
        </div>
        <CartItem/>
      </div>
    </div>
  )
}

export default Cart