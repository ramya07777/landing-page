import React from "react";
import "./Diabet.css";
import BreakDetail from "../detail/BreakDetail";
import LunchDetail from "../detail/LunchDetail";
import EveningDetail from "../detail/EveningDetail";
import DinnerDetail from "../detail/DinnerDetail";

export default function Diabet({ lunch, breakfast, evening, dinner }) {
  return (
    <>
      {dinner &&
        DinnerDetail.map((breaks) => (
          <div className="diabet__div">
            <div className="diabet__image">
              {breaks.text && (
                <div className="diabet__early">{breaks.text}</div>
              )}
              <img className="diaeraly__img" src={breaks.image} alt="" />
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
      {evening &&
        EveningDetail.map((breaks) => (
          <div className="diabet__div">
            <div className="diabet__image">
              {breaks.text && (
                <div className="diabet__early">{breaks.text}</div>
              )}
              <img className="diaeraly__img" src={breaks.image} alt="" />
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
      {lunch &&
        LunchDetail.map((breaks) => (
          <div className="diabet__div">
            <div className="diabet__image">
              {breaks.text && (
                <div className="diabet__early">{breaks.text}</div>
              )}
              <img className="diaeraly__img" src={breaks.image} alt="" />
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

      {breakfast &&
        BreakDetail.map((breaks) => (
          <div className="diabet__div">
            <div className="diabet__image">
              {breaks.text && (
                <div className="diabet__early">{breaks.text}</div>
              )}
              <img className="diaeraly__img" src={breaks.image} alt="" />
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
