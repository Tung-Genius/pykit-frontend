import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product-details/${product.id}`}>
            <div className='product-card'>
                <img src={product.image} alt='product'></img>
                <p className='name'>{product.name}</p>
                <div className='price-sold'>
                    <p className='price'>
                        <span>đ</span>
                        {product.price}
                    </p>
                    <p className='sold'>
                        Đã bán {product.sold}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard