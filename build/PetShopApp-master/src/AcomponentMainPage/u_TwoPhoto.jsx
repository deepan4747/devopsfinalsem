import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


const TwoPhoto = () =>{
    return(
        <div class="two-photo">
            <div class="first-photo">
                <div class="first-photo-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Announcement_Icon-01_300x.png?v=1614301513"/></div>
                <p class="first-photo-text">Extra Savings</p>
                <h3 class="first-photo-text-2">10% off instantly When You Buy Online &amp; Pickup In-Store</h3>
                <Link to="/dog" class="footer-1-button">Shop Now</Link>
            </div>
            <div class="second-photo">
                <div class="first-photo-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/files/PawPrint_Icon-01_300x.png?v=1614301513"/></div>
                <p class="first-photo-text-alala">Find Great Value in Our</p>
                <h3 class="first-photo-text-alala-2">Current Deals</h3>
                <Link to="/dog" class="footer-1-button">Shop Deals</Link>
            </div>
        </div>
    );
};

export default TwoPhoto;