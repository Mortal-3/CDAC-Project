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

      <Simulator />
      <div className="box" />
      <About />
      <div className="box" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
