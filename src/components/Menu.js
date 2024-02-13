import React from "react";
import "./Menu.css";
import { MdArrowOutward } from "react-icons/md";
import MenuDetail from "../detail/MenuDetail";
import { MdOutlineArrowDownward } from "react-icons/md";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__menu">
        {MenuDetail.map((menu, index) => (
          <div className="menu__one" key={menu.id}>
            <img className="menu__image" src={menu.image} alt="" />

            <div className="menu__bottom">
              <div className="menu__below">
                <h2 className="menu__head">{menu.name}</h2>
                <p className="menu__para">{menu.title}</p>
              </div>
              <div className="menu__start">
                {menu.button}
                {index === MenuDetail.length - 1 ? (
                  <MdOutlineArrowDownward className="menu__arrow" />
                ) : (
                  <MdArrowOutward className="menu__arrow" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
