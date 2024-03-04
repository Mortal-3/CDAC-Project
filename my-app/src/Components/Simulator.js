import React from "react";
// import Container1 Components
import "./../StyleComponent/Container1.css";
import "./../StyleComponent/utility.css";
import "./../StyleComponent/ContainerManagement.css";
import "./../StyleComponent/CircuitController.css";
//  import Component of 1st Componenet;
import Catalog from "./Container1/Catalog";
import CircuitDesign from "./Container1/CircuitDesign";
import CircuitController from "./Container1/CircuitController";
import DispCode from "./Container1/DispCode";
// import Component of 2nd Component;
import Graph from "./Container2/Graph";
import Result from "./Container2/Result";
import "../StyleComponent/AppContainer.css";
function Simulator() {
  return (
    <>
      <div className="container1" id="simulator">
        {/* <!-- Container 1 --> */}
        <div className="row">
          <div className="col-2">
            <Catalog />
          </div>
          <div className="col-5 ">
            <CircuitDesign />
          </div>
          <div className="col-1">
            <CircuitController />
          </div>
          <div className="col-2">
            <DispCode />
          </div>
        </div>
        {/*  <!-- End of Container 1 --> */}
        {/*  <!-- Container 2 --> */}
        {/* <div className="container2">
          <Result />
          <Graph />
        </div> */}
      </div>
      {/*  <!-- End of Main Container --> */}
    </>
  );
}
export default Simulator;
