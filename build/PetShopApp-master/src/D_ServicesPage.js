import React, { Component } from 'react';
import ServicesContainer from './CcomponentServicesPage/ServicesContainer';
import YoutubeContainer from './CcomponentServicesPage/Youtubecomponent';

function Linkserv() {
  return (
      <div className='App'>
        <div class="wrapper">
          <ServicesContainer/>
          <div class="youtubeContainer"><YoutubeContainer/></div>
        </div>
      </div>
  );
}


export default Linkserv;