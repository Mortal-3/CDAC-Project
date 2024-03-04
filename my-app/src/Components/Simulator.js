import React from "react";
// import Container1 Components
import "./../StyleComponent/Container1.css";
import "./../StyleComponent/Catalog.css";
import "./../StyleComponent/utility.css";
import "./../StyleComponent/ContainerManagement.css";
import "./../StyleComponent/CircuitController.css";
import Catalog from "./Container1/Catalog";
import CircuitDesign from "./Container1/CircuitDesign";
import CircuitController from "./Container1/CircuitController";
import DispCode from "./Container1/DispCode";

// import Container2 from "./Container2";
import Graph from "./Container2/Graph";
import Result from "./Container2/Result";
import "../StyleComponent/AppContainer.css";
export default function AppContainer() {
  <>
    <div className="mainContainer mainBody" id="simulator">
      {/* <!-- Container 1 --> */}
      <div class="container1">
        <Catalog />
        <CircuitDesign />
        <CircuitController />
        <DispCode />
      </div>
      {/*  <!-- End of Container 1 --> */}
      {/*  <!-- Container 2 --> */}
      <div className="container2">
        <Result />
        <Graph />
      </div>
    </div>
    {/*  <!-- End of Main Container --> */}
  </>;
}
