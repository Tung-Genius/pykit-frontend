import React from "react";
import './CategoriesList.css'
import CategoryCard from "./CategoryCard";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from "react";
import * as request from "../../utils/request";

const CategoriesList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get('/get-all-categories');
                const categoriesData = response.categories;
                setCategories(categoriesData);
            } catch (error) {
                console.log('Lỗi gọi api');
            }
        }

        fetchData();

    }, []);

    return (
        <div className="categories-list">
            <h2>Danh mục</h2>
            <div className="list">
                <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                slidesPerView={9}
                spaceBetween={1}
                initialSlide={0}
                className="swiper"
                >
                    {
                        categories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <CategoryCard category={category}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default CategoriesList