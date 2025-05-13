import React from "react";
import Data from "./DogItemData";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="dog-container-header">
          <li className="dog-container-p" onClick={() => setItem(Data)}>All</li>
          <li className="dog-container-p" onClick={() => filterItem("dry")}>Dry Food</li>
          <li className="dog-container-p" onClick={() => filterItem("wet")}>Wet Food</li>
          <li className="dog-container-p" onClick={() => filterItem("toy")}>Toys</li>
          <li className="dog-container-p" onClick={() => filterItem("clean")}>Cleaning</li>
          <li className="dog-container-p" onClick={() => filterItem("bowl")}>Bowls</li>
      </div>
    </>
  );
};

export default Buttons;