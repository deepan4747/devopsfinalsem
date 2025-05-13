import React, { Component } from 'react';
import ImageSlider from './AcomponentMainPage/ImageSlider';
import { SliderData } from './AcomponentMainPage/SlidersData';
import ShopByPet from './AcomponentMainPage/t_shop-by-pet';
import TwoPhoto from './AcomponentMainPage/u_TwoPhoto';
import TopCateg from './AcomponentMainPage/vTopCateg';
import ToyForPets from './AcomponentMainPage/w_ToyForPets';

function Appdog() {
  return (
        <div className='App'>
           <ImageSlider slides={SliderData}></ImageSlider>
              <ShopByPet/>
              <TwoPhoto/>
              <TopCateg/>
              <ToyForPets/>
        </div>
  );
}

export default Appdog;
