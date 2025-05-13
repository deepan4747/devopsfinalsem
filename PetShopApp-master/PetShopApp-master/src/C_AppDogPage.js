// import React, { Component } from 'react';
// import DogContainer from './BcomponentDogPage/DogContainer';

// function Linkdog() {
//   return (
//         <div className='App'>
//            <DogContainer/>
//         </div>
//   );
// }

// export default Linkdog;

import React, { useState } from "react";
import Data from "./BcomponentDogPage/DogItemData";
import Card from "./BcomponentDogPage/CardsDogPage";
import Buttons from "./BcomponentDogPage/ButtonyDogPage";

const DogContainer = () => {
const [item, setItem] = useState(Data);
const filterItem = (curcat) => {
  const newItem = Data.filter((newVal) => {
    return newVal.category === curcat;
  });
  setItem(newItem);
};

  return (
    <>
      <div className="dog-container">
          <ul className="dog-container-header">
            <h3 className="dog-container-h3">DOG</h3>
                <Buttons
                  filterItem={filterItem}
                  setItem={setItem}
                />
          </ul>
        <div class="dog-container-catalog"><Card item={item} /></div>
      </div>
    </>
  );
};

export default DogContainer;