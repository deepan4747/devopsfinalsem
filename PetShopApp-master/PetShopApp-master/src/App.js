import React, { useState } from 'react';
//import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import './styles/PROJECT.css';
import './styles/dog.css';
import './styles/service.css';
import './styles/map.css';
import './styles/login.css';
import './styles/regist.css';

import MainPage from './B_AppMainPage'; 
import DogPage from './C_AppDogPage.js';
import ServicesPage from './D_ServicesPage.js';
import MapPage from './E_MapPage.js';
import LoginPage from './F_LoginPage.js';
import RegistPage from './G_RegistPage';
import SimplePage from './D_SimplePage';

function Dollarr(props) {
  return <h2 className="header-1-text">Free Shipping on All Orders Over { props.brand }!</h2>;
}
const myElement = <Dollarr brand="$49" />;


function App (){
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen)
    }   
      return (
        <Router>
            <div className='App'>
            <div class="wrapper">
                <div className="header-1">
                <div className="header-1-icons">
                    <div className="header-1-facebook">
                        <a href="https://www.facebook.com/Petsense" className="header-1-facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>
                        </a>
                    </div>
                    <div className="header-1-insta">
                        <a href="https://www.instagram.com/petsense.by.tsc/" className="header-1-facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>                
                        </a>
                    </div>
                </div>
                <div className="header-1-text">
                    {myElement}
                    {/* <h2 className="header-1-text">Free Shipping on All Orders Over $49</h2> */}
                </div>
                <Link to="/login" className="header-1-account">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                </Link>
                </div>
                <div className="header-2">
                    <div id="burger" className="burger" style={{display: burgerOpen ? 'inline':'none' }}>
                        <div id="okno">
                            <Link to="/dog" className="header-2-dog-okno">Dog</Link>
                            <Link to="/dog" className="header-2-dog-okno">Cat</Link>
                            <Link to="/dog" className="header-2-dog-okno">Small Pet</Link>
                            <Link to="/services" className="header-2-dog-okno">Services</Link>
                            <Link to="/dog" className="header-2-dog-okno">Neighbor's Club</Link>
                            <Link to="/map" className="header-2-dog-okno">Find a Store</Link>
                        </div>
                    </div>
                    <div id="span-burger" className="header-2-burger" onClick={toggleBurger}>
                        <span className="header-2-burger"></span>
                    </div>
                    <Link to="/" className="header-2-logo">
                        <img src="https://cdn.shopify.com/s/files/1/0812/3573/t/219/assets/petsense-logo-white_400x.png?v=136694080771524844231665064644"/>
                    </Link>
                    <div className="header-2-navigation">
                        <div className="dropdown">
                            <Link to="/dog" className="dropbtn">DOG</Link>
                            <div className="dropdown-content-over">
                            <div className="dropdown-content">
                                <a className="dropdown-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/files/menu_dog-sm_64f76400-a0bf-4a29-9d8b-1ae83c7d696b.png?v=1644619656" alt=""/></a>
                                <div className="dropdown-div1">
                                    <Link to="/dog" className="dropdown-div1-h2">products for dog</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Dry Dog Food</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Wet Dog Food</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Toys</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Cleaning</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Bowls</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link to="/dog" className="dropbtn">Cat</Link>
                            <div className="dropdown-content-over">
                            <div className="dropdown-content">
                                <a className="dropdown-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/files/menu_cat-sm.png?v=1644619656" alt=""/></a>
                                <div className="dropdown-div1">
                                    <Link to="/dog" className="dropdown-div1-h2">products for cat</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Dry Cat Food</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Wet Cat Food</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Litter</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Toys</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Feeders</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link to="/dog" className="dropbtn">SMALL PET</Link>
                            <div className="dropdown-content-over">
                            <div className="dropdown-content">
                                <a className="dropdown-img" ><img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Menu_sm-pet-2.png?v=1644619367" alt=""/></a>
                                <div className="dropdown-div1">
                                    <Link to="/dog" className="dropdown-div1-h2">SMALL PETS</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Pet Bird</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Pet Fish</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Reptile</Link>
                                    <Link to="/dog" className="dropdown-div1-a">Small Animal</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link to="/services" className="dropbtn">SERVICES</Link>
                            <div className="dropdown-content-over">
                            <div className="dropdown-content">
                                <a className="dropdown-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/files/dog-grooming.png" alt=""/></a>
                                <div className="dropdown-div1">
                                    <Link to="/services" className="dropdown-div1-h2">SERVICES</Link>
                                    <Link to="/services" className="dropdown-div1-a">Grooming</Link>
                                    <Link to="/services" className="dropdown-div1-a">Wag! Pet Services</Link>
                                    <Link to="/services" className="dropdown-div1-a">Pet Insurance</Link>
                                    <Link to="/services" className="dropdown-div1-a">Adoption</Link>
                                    <Link to="/services" className="dropdown-div1-a">Training</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link to="/dog" className="dropbtn">NEIGHBOR'S CLUB</Link>
                        </div>
                        <div className="dropdown">
                            <Link to="/map" className="dropbtn">FIND A STORE</Link>
                        </div>
                    </div>
                    <div className="header-2-actions">
                        <div className="header-2-input">
                            <input type="text" className="header-2-input" placeholder="Search...">
                            {/* <button type="submit" className="header-2-button"><svg aria-hidden="true" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg></button> */}
                            </input>
                        </div>
                        <Link to="/dog" className="header-2-cart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></Link>
                    </div>
                </div>
                    <Routes>
                        <Route exact path='/' element={< MainPage />}></Route>
                        <Route exact path='/dog' element={< DogPage />}></Route>
                        <Route exact path='/services' element={< ServicesPage />}></Route>
                            <Route exact path='/services/grooming' element={< SimplePage />}></Route>
                        <Route exact path='/map' element={< MapPage />}></Route>
                        <Route exact path='/login' element={< LoginPage />}></Route>
                        <Route exact path='/regist' element={< RegistPage />}></Route>
                    </Routes>
                <div class="footer">
                    <div class="footer-1">
                        <div class="footer-1-text">
                            <h3 class="footer-1-text-1" >Join our e-mail list</h3>
                            <p class="footer-1-text-2" >Sign up for special offers, savings, and event announcements.</p>
                        </div>
                        <div class="footer-1-button">
                            <Link to="/login" class="footer-1-button">Sign Up Now</Link>
                        </div>
                    </div>
                    <div class="footer-2">
                        <div class="footer-2-aaa">
                                <div class="footer-2-aaa-gogfood">
                                    <h3 class="footer-2-aaa-text">DOG FOOD</h3>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Dry Dog Food</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Wet Dog Food</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Biscuits</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Chewy Threats</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">DentalTreats</Link>
                                </div>
                                <div class="footer-2-aaa-gogfood">
                                    <h3 class="footer-2-aaa-text">DOG SUPPLIES</h3>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Toys</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Carriers & Travel</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Collars, Harnesses & Leads</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Flea & Tick</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Grooming & Shampoo</Link>
                                </div>
                                <div class="footer-2-aaa-gogfood">
                                    <h3 class="footer-2-aaa-text">CAT FOOD</h3>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Dry Cat Food</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Wet Cat Food</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Cat Threats</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Cat Food Toppers</Link>
                                </div>
                                <div class="footer-2-aaa-gogfood">
                                    <h3 class="footer-2-aaa-text">CAT SUPPLIES</h3>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Cat Litter</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Litter Boxes & Supplies</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Grooming</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Scratchers</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Cat Toys</Link>
                                </div>
                                <div class="footer-2-aaa-gogfood">
                                    <h3 class="footer-2-aaa-text">MORE LINKS</h3>
                                    <Link to="/dog" class="footer-2-aaa-text-2">About Petsense</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Careers</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Small Pet Care Guides</Link>
                                    <Link to="/map" class="footer-2-aaa-text-2">Store Locator</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">COVID-19 Response</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Privacy  Policy</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">Terms & Conditions</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">In-Store Return Policy</Link>
                                    <Link to="/dog" class="footer-2-aaa-text-2">California Transparency Act</Link>
                                </div>
                        </div>

                        <div class="footer-2-info">
                            <h3 class="footer-2-info-text">About Petsense</h3>
                            <p class="footer-2-info-text-2">Petsense by Tractor Supply is a pet specialty retailer focused on meeting the needs of pet owners, primarily in small and mid-size communities. We specialize in providing a large assortment of pet food, supplies and services, such as grooming and training, and offering customers a tailored experience while providing the top-quality products they need at a price they love. We are also committed to promoting responsible pet ownership through pet adoptions, community involvement and education.</p>
                            <a href="tel:844-872-1000" class="footer-2-info-text-3">844-872-1000</a>
                            <a href="mailto:customerservice@petsense.com" class="footer-2-info-text-3">customerservice@petsence.com</a>
                            <a class="footer-2-info-text-3"></a>
                        </div>
                    </div>
                    <div class="footer-2-bbb">
                        <p class="footer-2-bbb-text">© 2022 Petsense  —  All Rights Reserved</p>
                    </div>
                </div>
            </div>

            </div>
        </Router>
      );
  }

export default App;