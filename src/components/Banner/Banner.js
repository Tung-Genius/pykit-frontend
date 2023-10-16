import React from "react";
import './Banner.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Banner = () => {
    const sliders = [
        { 'id': 1, 'image': '/images/sliders/slider1.jpg'},
        { 'id': 2, 'image': '/images/sliders/slider2.jpg'},
        { 'id': 3, 'image': '/images/sliders/slider3.jpg'},
        { 'id': 4, 'image': '/images/sliders/slider1.jpg'},
        { 'id': 5, 'image': '/images/sliders/slider2.jpg'},
        { 'id': 6, 'image': '/images/sliders/slider3.jpg'},
    ]

    return (
        <div className="banner">
            <div className="slider">
                <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                navigation={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // spaceBetween={10}
                slidesPerView={1}
                >
                    {
                        sliders.map((slider) => (
                            <SwiperSlide key={slider.id}>
                                <img src={slider.image} alt="hh"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="images">
                <img src="/images/sliders/slider1.jpg" alt="hh"/>
                <img src="/images/sliders/slider2.jpg" alt="hh"/>
            </div>
        </div>
    )
}

export default Banner