import "./App.css";
import Carusol from "./components/Carusol";
import Diet from "./components/Diet";
import Dish from "./components/Dish";
import Enquire from "./components/Enquire";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Health from "./components/Health";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Nutrition from "./components/Nutrition";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Menu />
      <Home />
      <Food />
      <Health />
      <Diet />
      <Nutrition />
      <Carusol />
      <Dish />
      <Enquire />
      <Footer />
    </div>
  );
}

export default App;
