import React from "react";
import "./Food.css";
import FoodDetail from "../detail/FoodDetail";

export default function Food() {
  return (
    <div className="food">
      <div className="food__food">
        {FoodDetail.map((food, index) => (
          <div className="food__top" key={index}>
            <img className="footimage" src={food.image} alt="" />
            <p
              className={`food__title${
                index === 2 || index === 3 ? " food__para__margin" : ""
              }`}
            >
              {food.name}
            </p>
            <p className="food__para">{food.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
