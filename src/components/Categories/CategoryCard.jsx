import React from "react";
import './CategoryCard.css';
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/products/category/${category.id}`}>
            <div className="category-card">
                <div className="top">
                    <div className="container-img">
                        <img src={category.image} alt="Haha"></img>
                    </div>
                </div>
                <span className="name">{category.name}</span>
            </div>
        </Link>
    )
}

export default CategoryCard