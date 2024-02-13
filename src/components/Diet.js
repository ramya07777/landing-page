import React from 'react';
import "./Diet.css";
import diet from "../images/diet.png";
import { MdArrowOutward } from "react-icons/md";

export default function Diet() {
  return (
    <div className='diet'>
    
<img className='diet__diet' src={diet} alt=' ' />
<div className='diet__top'>
    <p className='diet__para'>Create Your Own Diet Plan With Us</p>
    <p className='diet__head'>Customise your ideal diet plan tailored to your unique needs</p>
    <div className='diet__see'>SEE PLANS<MdArrowOutward className='diet__arrow'/></div>
</div>
    </div>
  )
}
