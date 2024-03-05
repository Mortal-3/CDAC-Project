import NavigationBar from "./Components/NavigationBar";
import Simulator from "./Components/Simulator";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import "./StyleComponent/Line.css";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="box2" />
      <Simulator />
      <div className="box" />
      <About />
      <div className="box" />
      <Contact />
      <div className="box" />
      <Footer />
    </>
  );
}

export default App;
