import React from "react";
import "./Health.css";
import health from "../images/health.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Health() {
  return (
    <div className="health">
      <div className="health__health">
        <div className="health__top">
          <h1 className="health__head">
            Healthy & Tasty Foods With Natural Ingredients
          </h1>
          <p className="health__para">
            Indulge in a fusion of health and taste with our range of
            meticulously crafted dishes. Every meal is a symphony of natural,
            wholesome ingredients, carefully selected to elevate flavour and
            nourish your body. From vibrant salads to hearty mains, each dish
            embodies our commitment to marrying nutritional goodness with
            irresistible taste. Savour the goodness of nature in every
            delicious, wholesome bite, delivered straight to your table.
          </p>
          <p className="health__button">
            Start Subscription Now{" "}
            <IoIosArrowRoundForward className="health__icon" />
          </p>
        </div>

        <div className="health__bottom">
          <img className="healthbottom__img" src={health} alt="" />
        </div>
      </div>
    </div>
  );
}
