import React from "react";
import Catalog from "./Container1/Catalog";
import CircuitDesign from "./Container1/CircuitDesign";
import CircuitController from "./Container1/CircuitController";
import DispCode from "./Container1/DispCode";
import Graph from "./Container2/Graph";
import Result from "./Container2/Result";

// Css File Imported
import "./../StyleComponent/ContainerSection.css";
import "./../StyleComponent/utility.css";
function Simulator() {
  return (
    <>
      <div div className="mainContainer">
        <div className="container1" id="simulator">
          {/* <!-- Container 1 --> */}
          {/* It contain mostly user intraction componenets like Gate Catalog ,Circuit Design Area,Circuit Controller Button etc */}
          <div className="row">
            <div className="col-2">
              <Catalog />
            </div>
            <div className="col-6 ">
              <CircuitDesign />
            </div>
            <div className="col-1">
              <CircuitController />
            </div>
            <div className="col-3">
              <DispCode />
            </div>
          </div>
        </div>
        {/*  <!-- End of Container 1 --> */}
        {/*  <!-- Container 2 Contain the after processing part (Output generation part0000  ) --> */}
        <div className="container2 row">
          <div className="col-8">
            <Result />
          </div>
          <div className="col-4">
            <Graph />
          </div>
        </div>
      </div>

      {/*  <!-- End of Main Container --> */}
    </>
  );
}
export default Simulator;
