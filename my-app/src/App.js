import NavigationBar from "./Components/NavigationBar";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";
import CircuitDesign from "./Components/CircuitDesign";
function App() {
  const name = "Gopesh";
  return (
    <>
      <NavigationBar />
      <Catalog />
      <CircuitDesign />
      <DispCode />
      <Result />
      <Graph />
      <Contact />
      <About />
      <Footer />

      {/* <div className="App">This is app Component {name}</div> */}
    </>
  );
}

export default App;
