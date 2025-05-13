import React, { useState } from 'react';

const ToyForPets = () =>{
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen)
    }   
    

    return(
        <div class="toys-for-pets">
            <div class="toys-for-pets-header">
                <h2 class="toys-for-pets-header-text">TOYS FOR PETS OF ALL SIZES!</h2>
                <a class="levo" onClick={toggleBurger}>&lt;</a>
                <a class="pravo" onClick={toggleBurger}>&gt;</a>
            </div>
            <div class="toys-for-pets-nav-4-1">
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/33989-1568390790_1600x.jpg?v=1571450531"/></div>
                    <p class="dog-container-catalog-p">KONG AirDog Squeakair Ball Dog Toy</p>
                    <h5 class="dog-container-catalog-h5">$3.99</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">4.0</p>
                        <p class="dog-container-catalog-rotate-text">(96)</p>
                    </div>
                </div>
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/38315-1568324584_1600x.jpg?v=1571450662"/></div>
                    <p class="dog-container-catalog-p">KONG Plush Teddy Bear Dog Toy</p>
                    <h5 class="dog-container-catalog-h5">$3.29</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">5.0</p>
                        <p class="dog-container-catalog-rotate-text">(5)</p>
                    </div>
                </div>
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/30841-1568393663_800x.jpg?v=1571450777"/></div>
                    <p class="dog-container-catalog-p">KONG Classic Dog Toy</p>
                    <h5 class="dog-container-catalog-h5">$11.99</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">5.0</p>
                        <p class="dog-container-catalog-rotate-text">(48)</p>
                    </div>
                </div>
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/33988-1568390985_800x.jpg?v=1571450817"/></div>
                    <p class="dog-container-catalog-p">KONG Puppy Toy</p>
                    <h5 class="dog-container-catalog-h5">$16.29</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">4.0</p>
                        <p class="dog-container-catalog-rotate-text">(44)</p>
                    </div>
                </div>
            </div>
            
            <div class="toys-for-pets-nav-4-2" id="4-2" style={{display: burgerOpen ? 'flex':'none' }}>
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/38290-1568388185_800x.jpg?v=1571450554"/></div>
                    <p class="dog-container-catalog-p">KONG Plush Duck Dog Toy</p>
                    <h5 class="dog-container-catalog-h5">$3.20</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">0.0</p>
                        <p class="dog-container-catalog-rotate-text">(0)</p>
                    </div>
                </div>
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/30857-1568391408_800x.jpg?v=1571450559"/></div>
                    <p class="dog-container-catalog-p">KONG Wubba Classic Dog Toy</p>
                    <h5 class="dog-container-catalog-h5">$12.29</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">5.0</p>
                        <p class="dog-container-catalog-rotate-text">(2)</p>
                    </div>
                </div>
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/31074-1_4b5f8ea1-da9c-46c9-962b-d7b5046c3a6c_800x.jpg?v=1571450532"/></div>
                    <p class="dog-container-catalog-p">MultiPet Lamb Chop Dog Toy</p>
                    <h5 class="dog-container-catalog-h5">$5.99</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">4.0</p>
                        <p class="dog-container-catalog-rotate-text">(44)</p>
                    </div>
                </div>
                <div class="dog-container-catalog-a toy">
                    <div class="dog-container-catalog-img" style={{padding: '30px'}}><img src="https://cdn.shopify.com/s/files/1/0812/3573/products/33985-1450212890_ecea5283-dadb-43ac-88bc-0fb7ba48c34a_800x.jpg?v=1571450580"/></div>
                    <p class="dog-container-catalog-p">JW Pet Hol-ee Roller Dog Toy</p>
                    <h5 class="dog-container-catalog-h5">$11.29</h5>
                    <div class="dog-container-catalog-rotate">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                        </div>
                        <p class="dog-container-catalog-rotate-text">3.0</p>
                        <p class="dog-container-catalog-rotate-text">(69)</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default ToyForPets;