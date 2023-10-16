import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import CategoriesList from '../../components/Categories/CategoriesList'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {

  const productList = [
            {'id': 1, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20000, 'sold': 12000},
            {'id': 2, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20001, 'sold': 12000},
            {'id': 3, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20002, 'sold': 12000},
            {'id': 5, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20003, 'sold': 12000},
            {'id': 6, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20004, 'sold': 12000},
            {'id': 7, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20005, 'sold': 12000},
            {'id': 8, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20006, 'sold': 12000},
            {'id': 9, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20007, 'sold': 12000},
            {'id': 10, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20008, 'sold': 12000},
            {'id': 11, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20009, 'sold': 12000},
            {'id': 12, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200010, 'sold': 12000},
            {'id': 13, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000011, 'sold': 12000},
            {'id': 14, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000012, 'sold': 12000},
            {'id': 15, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000013, 'sold': 12000},
            {'id': 16, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000014, 'sold': 12000},
            
            {'id': 17, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200015, 'sold': 12000},
            {'id': 18, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200016, 'sold': 12000},
            {'id': 19, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200017, 'sold': 12000},
            {'id': 20, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200018, 'sold': 12000},
            {'id': 21, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200019, 'sold': 12000},
            {'id': 22, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200020, 'sold': 12000},
            {'id': 23, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200021, 'sold': 12000},
            {'id': 24, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200022, 'sold': 12000},
            {'id': 25, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200023, 'sold': 12000},
            {'id': 26, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200024, 'sold': 12000},
            {'id': 27, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200025, 'sold': 12000},
            {'id': 28, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000026, 'sold': 12000},
            {'id': 29, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000027, 'sold': 12000},
            {'id': 30, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000028, 'sold': 12000},
            {'id': 31, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000029, 'sold': 12000},
            {'id': 32, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000030, 'sold': 12000},
            {'id': 33, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200031, 'sold': 12000},
            {'id': 34, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200032, 'sold': 12000},
            {'id': 35, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200033, 'sold': 12000},
            {'id': 36, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200034, 'sold': 12000},
            {'id': 37, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200035, 'sold': 12000},
            {'id': 38, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200036, 'sold': 12000},
            {'id': 39, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200037, 'sold': 12000},
            {'id': 40, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200038, 'sold': 12000},
            {'id': 41, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 200039, 'sold': 12000},
            {'id': 42, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 2000140, 'sold': 12000},
            {'id': 43, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20000141, 'sold': 12000},
            {'id': 44, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20000142, 'sold': 12000},
            {'id': 45, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20000143, 'sold': 12000},
            {'id': 46, 'image': '/images/sliders/slider1.jpg', 'name': 'Sản phẩm nước hoa ý luôn làm bạn hài long', 'price': 20000144, 'sold': 12000},
  ];

  return (
    <div className='home'>
        <Header showAuthLinks={false}/>
        <Banner/>
        <div className='content-main'>
          <CategoriesList/>
          <ProductList productList={productList}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home