import React from "react";
import "./Nutriton.css";
import nutrition from "../images/nutrition.png";
import NutritionDetail from "../detail/NutritionDetail";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

export default function Nutrition() {
  return (
    <div className="nutrition">
      <div className="nutrition__top">
        <div>
          <img className="nutritiontop___image" src={nutrition} alt="" />
        </div>
        <div className="nutrition__left">
          <h2 className="nutrition__head">
            Our Value Nutrition For Your Health
          </h2>
          <p className="nutrition__para">
            Explore the essence of nutrition for holistic health: essential
            nutrients, balanced diets, meal planning, and debunking myths for
            informed choices.
          </p>
          <div className="nutrition__below">
            {NutritionDetail.map((nut) => (
              <div className="nutrition__bottom">
                <img className="nut__image" src={nut.image} alt="" />
                <p className="nut__balance">{nut.name}</p>
              </div>
            ))}
          </div>
          <div className="nut__line"></div>
          <div className="nut__buttom">
            <div className="nut__icon">
              <img src={icon1} alt="" />
              <p className="nut__para">100% Organic</p>
            </div>
            <div className="nut__icon">
              <img src={icon2} alt="" />
              <p className="nut__para1">All Menu Recipe Made by Specialists </p>
            </div>
            <div className="nut__icon">
              <img src={icon3} alt="" />
              <p className="nut__para2">Always On Time Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
