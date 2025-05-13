import React from "react";
import { Link } from "react-router-dom";

const ServicesContainer = () =>{
    return( 
    <div class="wrapper">

        <div class="containers">
            <div class="container-1">
                <img class="container-1-img" src="https://cdn.shopify.com/s/files/1/0812/3573/files/WAG_Services_Page_1.jpg?v=1655129418&width=832" alt=""/>
                <h5 class="container-1-h2">GROOMING</h5>
                <p class="container-1-p">From a simple bath to a full grooming treatment, our expert&nbsp;groomers&nbsp;focus on creating a calm and relaxing experience your&nbsp;dog&nbsp;can enjoy. We provide a caring, stress-free, and sensitive environment for dogs (and cats) of all breeds and sizes. <Link to="/services/grooming" class="container-1-a">Visit our Grooming page</Link> to learn more.</p>
            </div>
            <div class="container-1">
                <img class="container-1-img" src="https://cdn.shopify.com/s/files/1/0812/3573/files/WAG_Services_WAGService_Tile.jpg?v=1654284612&width=832" alt=""/>
                <h2 class="container-1-h2">WAG! PET SERVICES</h2>
                <p class="container-1-p">Whether you're looking for daily walks, planning a trip, stuck at work, or just want your best friend to have some company&nbsp;Wag! Pet Services is trusted in pet care. From walks to overnights Wag! makes pet ownership easier with people you can trust. <a href="https://wagwalking.com/partners/petsense" class="container-1-a">Visit our partners at WAG!</a></p>
            </div>
            <div class="container-1">
                <img class="container-1-img" src="https://cdn.shopify.com/s/files/1/0812/3573/files/WAG_Services_Page_Tile_3.jpg?v=1655129436&width=832" alt=""/>
                <h2 class="container-1-h2">PET INSURANCE</h2>
                <p class="container-1-p">Feel better as a pet parent having your pet's unique needs covered. Just share a few details about yourself and your pet&nbsp;and in just a few seconds you'll be able to view a range of options and providers&nbsp;to find the best pet insurance solution. <a href="https://quote.petted.com/quote/ref=petsense" class="container-1-a">Click here to start comparing options</a></p>
            </div>
            <div class="container-1">
                <img class="container-1-img" src="https://cdn.shopify.com/s/files/1/0812/3573/files/WAG_Services_Adoption_Tile.jpg?v=1654284627&width=832" alt=""/>
                <h2 class="container-1-h2">ADOPTIONS</h2>
                <p class="container-1-p">With more adoptable&nbsp;pets&nbsp;than ever,&nbsp;find your new best friend with us! We're proud to work alongside local animal shelters and rescues to help bring animals into their forever homes.  Learn more about <a href="https://www.petsense.com/pages/pet-adoptions" class="container-1-a">adoptions at Petsense.</a></p>
            </div>
            <div class="container-1">
                <img class="container-1-img" src="https://cdn.shopify.com/s/files/1/0812/3573/files/WAG_Services_Training_Tile.jpg?v=1654284639&width=832" alt=""/>
                <h2 class="container-1-h2">TRAINING</h2>
                <p class="container-1-p">Training is an essential part of owning a pet and can be started at any age. Training builds confidence, provides mental stimulation and strengthens the human-animal bond.&nbsp;Class availability varies by location. <a href="https://www.petsense.com/pages/training" class="container-1-a">Visit our Training page</a> for more information.</p>
            </div>
            <div class="container-1">
                <img class="container-1-img" src="https://cdn.shopify.com/s/files/1/0812/3573/files/WAG_Services_VetClinics_Tile.jpg?v=1654284663&width=832" alt=""/>
                <h2 class="container-1-h2">VET CLINICS</h2>
                <p class="container-1-p">Enjoy the convenience of no appointment required. Our in-store vet clinics partner with and host licensed veterinarians for wellness and preventive care so you can save time, money, and hassle.  Availabilty varies by location.  <a href="https://www.petsense.com/pages/vet-clinics" class="container-1-a">Find more information on our vet clinics here.</a></p>
            </div>
        </div>
    </div>
    );
};
    
export default ServicesContainer;