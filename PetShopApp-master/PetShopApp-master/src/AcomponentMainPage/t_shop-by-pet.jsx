import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


const ShopByPet = () =>{
    return(
        <div class="shop-by-pet">
            <h2 class="shop-by-pet-text">SHOP BY PET</h2>
            <div class="shop-by-pet-navigation">
                <Link to="/dog" class="shop-by-pet-dog">
                    <img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Animal_Web_Icon-Dog_833x698.jpg?v=1660333373"/>
                    <h2 class="shop-by-pet-dog-text">Dog</h2>
                </Link>
                <Link to="/dog" class="shop-by-pet-dog">
                    <img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Animal_Web_Icon-Cat_833x698.jpg?v=1660333366"/>
                    <h2 class="shop-by-pet-dog-text">Cat</h2>
                </Link>
                <Link to="/dog" class="shop-by-pet-dog">
                    <img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Animal_Web_Icon-04_400x335.jpg?v=1660578560"/>
                    <h2 class="shop-by-pet-dog-text">Small Pet</h2>
                </Link>
                <Link to="/dog" class="shop-by-pet-dog">
                    <img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Animal_Web_Icon-Fish_833x698.jpg?v=1660333378"/>
                    <h2 class="shop-by-pet-dog-text">Fish</h2>
                </Link>
                <Link to="/dog" class="shop-by-pet-dog">
                    <img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Animal_Web_Icon-Reptile_833x698.jpg?v=1660333386"/>
                    <h2 class="shop-by-pet-dog-text">Reptile</h2>
                </Link>
                <Link to="/dog" class="shop-by-pet-dog">
                    <img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Animal_Web_Icon-Bird_833x698.jpg?v=1660333357"/>
                    <h2 class="shop-by-pet-dog-text">Bird</h2>
                </Link>
            </div>
        </div>
    );
};

export default ShopByPet;