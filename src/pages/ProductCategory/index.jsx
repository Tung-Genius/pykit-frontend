import React from 'react';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';

function ProductCategoryPage() {

  return (
    <div className='product-category-wrapper'>
        <Header showAuthLinks={false}/>
        <div className="products-wrapper">
            <ProductList />
        </div>
        <Footer/>
    </div>
  )
}

export default ProductCategoryPage;