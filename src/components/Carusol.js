import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carusol.css";
import CarusolDetail from "../detail/CarusolDetail";

export default function Carusol() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,

    responsive: [
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="top__slide-container">
      <div className="top__slide">
        <h2 className="carus">Our Customers Love</h2>

        <Slider {...settings} className="slider__carus">
          {CarusolDetail.map((slid, index) => (
            <div className="slideee">
              <div className="slidee" key={index}>
                <img src={slid.image} alt="" />
                <p className="slide__para">{slid.name}</p>
                <p className="slide__head">{slid.title}</p>
                <p className="slide__paraa">{slid.sub}</p>
                <p className="slide__week">{slid.end}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
