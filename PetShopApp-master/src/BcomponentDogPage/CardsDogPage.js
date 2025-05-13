import React from "react";
const Card = ({ item }) => {            
  return (
    <>
      <div className="dog-container-catalog">
          {item.map((Val) => {
            return (
              <div className="dog-container-catalog-a" key={Val.id}>
                    <div className="dog-container-catalog-img" style={Val.cssimg}>
                        <img src={Val.img} className="dog-container-catalog-img-css" />
                    </div>
                    <p className="dog-container-catalog-p">{Val.p}</p>
                    <h5 className="dog-container-catalog-h5">{Val.price}</h5>
                    <div className="dog-container-catalog-rotate">
                        <div className="stars">
                            {Val.star}
                        </div>
                        <p className="dog-container-catalog-rotate-text">{Val.otzyvy}</p>
                        <p className="dog-container-catalog-rotate-text">{Val.countotzyvov}</p>
                    </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
 
export default Card;