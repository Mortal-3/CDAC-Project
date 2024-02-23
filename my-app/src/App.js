import NavigationBar from "./Components/NavigationBar";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";
import CircuitDesign from "./Components/CircuitDesign";
import CircuitController from "./Components/CircuitController";
import DispCode from "./Components/DispCode";
import Result from "./Components/Result";
import Graph from "./Components/Graph";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <>
      <NavigationBar />
      <Catalog />
      <CircuitDesign />
      <CircuitController />
      <DispCode />
      <Result />
      <Graph />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default App;
