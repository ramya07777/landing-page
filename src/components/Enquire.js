import React from "react";
import "./Enquire.css";
import { FaArrowRight } from "react-icons/fa6";

import EnqDetail from "../detail/EnqDetail";

export default function Enquire() {
  return (
    <div className="enquire__enquire">
      <div className="enquire__top">
        <div className="enquire">
          <h2 className="enquire__head">Enquire About More Plans</h2>
        </div>

        <div className="enquire__about">
          <div className="enquire__bottom">
            <div className="enq__bottom">
              <div className="enq__center">
                <div className="en__input">
                  <label className="en__label">Name</label>
                  <input type="text" className="enquire__input" />
                </div>
              </div>
              <div className="enq__center">
                <div className="en__input">
                  <label className="en__label">Email</label>
                  <input type="text" className="enquire__input" />
                </div>
              </div>
              <div className="enq__center">
                <div className="en__input">
                  <label className="en__label">Mobile Number</label>
                  <input type="text" className="enquire__input" />
                </div>
              </div>
              <div></div>
              <div className="enq__center">
                <div className="enquire__choose">
                  <p className="enquirebot__para">Choose your preferences</p>
                  <p className="enquirebot__para1">
                    Choose as many as you like. These help us make meal
                    recommendations and personalize your experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="enq__name">
              {EnqDetail.map((enq) => (
                <div className="enq__center">
                  <div className="enqbotimg">
                    <img className="enq__enwimg" src={enq.image} alt="" />
                    <div className="enqbotimg__bottom">
                      <p className="enqbotimg__menu">{enq.name}</p>
                      <p className="enqbotimg__para">{enq.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="enq__button">
              Submit
              <FaArrowRight className="enq__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
