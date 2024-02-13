import React from "react";
import "./Nonveg.css";
import NonvegDetail from "../detail/NonvegDetail";

export default function Nonveg({ nonveg }) {
  return (
    <>
      {nonveg &&
        NonvegDetail.map((breaks) => (
          <div className="diabet__div">
            <div className="diabet__image">
              {breaks.text && (
                <div className="diabet__early">{breaks.text}</div>
              )}
              <img className="non__early" src={breaks.image} alt="" />
              <div className="diabetimg__top">
                <div>
                  <h3 className="diabetimg__menu">
                    {breaks.name}
                    <span className="diabetgreen">
                      <img src={breaks.green} alt="" />
                    </span>
                  </h3>
                  <div className="diabet__cal">
                    <p className="diabetimg__para">{breaks.title}</p>
                    <p className="diabetimg__para">{breaks.button}</p>
                  </div>
                </div>
                <div className="diabet__know">
                  <p className="diabetimg__know">KNOW MORE</p>
                  <p className="diabet__botpara">
                    <span className="diabetimg__clock">{breaks.icon}</span>
                    {breaks.icontext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
