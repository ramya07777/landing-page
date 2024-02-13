import React, { useState } from "react";
import "./Home.css";
import { MdArrowOutward } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import green from "../images/green.png";
import HomeDetail from "../detail/HomeDetail";
import { IoIosArrowDown } from "react-icons/io";
import Diabet from "./Diabet";
import Nonveg from "./Nonveg";

export default function Home() {
  const [diabet, setDiabet] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [evening, setEvening] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [nonveg, setNonveg] = useState(false);
  const [home, setHome] = useState(true);

  const handleHome = () => {
    setHome(true);
    setDiabet(false);
    setNonveg(false);
  };

  const handleDiabet = () => {
    setDiabet(true);
    setBreakfast(true);
    setLunch(false);
    setEvening(false);
    setDinner(false);
    setHome(false);
    setNonveg(false);
  };

  const handleLunch = () => {
    setLunch(true);
    setBreakfast(false);
    setEvening(false);
    setDinner(false);
  };

  const handleBreak = () => {
    setBreakfast(true);
    setLunch(false);
    setEvening(false);
    setDinner(false);
  };

  const handleEvening = () => {
    setEvening(true);
    setBreakfast(false);
    setLunch(false);
    setDinner(false);
  };

  const handleDinner = () => {
    setDinner(true);
    setEvening(false);
    setBreakfast(false);
    setLunch(false);
  };

  const handlenonveg = () => {
    setNonveg(true);
    setHome(false);
    setDiabet(false);
  };

  return (
    <div className="home">
      <div className="home__detail">
        <div className="home__home">
          <h1 className="home__head">Our Meal Delivery Menus</h1>
          <p className="home__para">
            Curated, nutritious dishes delivered for your convenience, featuring
            diverse flavours and dietary options.
          </p>

          <div className="home__header">
            <div className="home__menu" onClick={handleHome}>
              Nutritious Menus
            </div>
            <div className="home__menu" onClick={handleDiabet}>
              Diabetes Menus
            </div>
            <div className="home__menu" onClick={handlenonveg}>
              Non-Vegetarian
            </div>
            <div className="home__menu">Signature Menus</div>
          </div>
        </div>

        <div className="homme">
          <div className="home__middle">
            <div className="home__top">
              <h2 className="homemid__head">Choose a Meals Per Week </h2>
              <div className="home__see">
                SEE PLANS
                <MdArrowOutward className="home__arrow" />
              </div>
            </div>

            {diabet ? (
              <div className="diabet__diabet">
                <div className="diabet">
                  <p
                    className="diabet__para"
                    onClick={handleBreak}
                    style={{ color: breakfast ? "#002684" : "#656565" }}
                  >
                    Breakfast
                  </p>
                  <p
                    className="diabet__para"
                    onClick={handleLunch}
                    style={{ color: lunch ? "#002684" : "#656565" }}
                  >
                    Lunch
                  </p>
                  <p
                    className="diabet__para"
                    onClick={handleEvening}
                    style={{ color: evening ? "#002684" : "#656565" }}
                  >
                    Evening
                  </p>
                  <p
                    className="diabet__para"
                    onClick={handleDinner}
                    style={{ color: dinner ? "#002684" : "#656565" }}
                  >
                    Dinner
                  </p>
                  <p className="diabet__paraa">
                    1400 kcal
                    <IoIosArrowDown />
                  </p>
                </div>
                <div className="diabet__line"></div>
              </div>
            ) : (
              <></>
            )}

            <div className="home__bottom">
              {nonveg && <Nonveg nonveg={nonveg} />}
              {diabet && (
                <Diabet
                  lunch={lunch}
                  breakfast={breakfast}
                  evening={evening}
                  dinner={dinner}
                />
              )}

              {home &&
                HomeDetail.map((home) => (
                  <div className="home__div" key={home.id}>
                    <div className="home__image">
                      <img
                        className="homefood__image"
                        src={home.image}
                        alt=""
                      />
                      <div className="homeimg__top">
                        <h3 className="homeimg__menu">{home.name}</h3>
                        <p className="homeimg__para">{home.title}</p>
                        <div className="home__bottomm">
                          <p className="home__botpara">
                            <FaRegClock className="homeimg__clock" />
                            {home.button}
                          </p>
                          <img src={green} alt="" />
                        </div>
                        <p className="homeimg__know">KNOW MORE</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="home__more">SEE MORE MENUS</div>
      </div>
    </div>
  );
}
