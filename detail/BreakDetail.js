import break1 from "../images/break1.png";
import { FaRegClock } from "react-icons/fa";
import green from "../images/green.png";
import break2 from "../images/break2.png";
import break3 from "../images/break3.png";
import break4 from "../images/break4.png";
import break5 from "../images/break5.png";
import break6 from "../images/break6.png";

const BreakDetail = [
  {
    id: 1,
    image: break1,
    name: "Coffee / Tea, Almond 4 nos, Walnut-1",
    title: "1 Cup",
    button: "100 kcal",
    icon: "",
    green: "",
    text: "Early Morning",
    icontext: "",
  },
  {
    id: 2,
    image: break2,
    name: "Idly and Coconut Chutney",
    title: "2 nos",
    button: "140 kcal",
    icon: "",
    green: green,
    text: "Breakfast",
    icontext: "",
  },
  {
    id: 3,
    image: break3,
    name: "Dosa and Sambar",
    title: "2 Small",
    button: "100 kcal",
    icon: <FaRegClock />,
    green: green,
    text: "Breakfast",
    icontext: "25min",
  },
  {
    id: 4,
    image: break4,
    name: "Wheat upuma",
    title: "1 Katori",
    button: "100 kcal",
    icon: "",
    green: green,
    text: "Breakfast",
    icontext: "",
  },
  {
    id: 5,
    image: break5,
    name: "Toast (Wheat)",
    title: "2 nos",
    button: "100 kcal",
    icon: "",
    green: "",
    text: "",
    icontext: "",
  },
  {
    id: 6,
    image: break6,
    name: "Fresh fruit",
    title: "100 gms",
    button: "50 kcal",
    icon: "",
    green: "",
    text: "MID Morning",
    icontext: "",
  },
];

export default BreakDetail;
