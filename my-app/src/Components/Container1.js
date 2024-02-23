import React from "react";
import "./StyleComponent/Container1.css";
import Catalog from "./Container1/Catalog";
import CircuitDesign from "./Container1/CircuitDesign";
import CircuitController from "./Container1/CircuitController";
import DispCode from "./Container1/DispCode";
function Container1() {
  return (
    <div>
      {/* <!-- Simulator Page Section --> */}
      <div class="mainBody" id="simulator">
        {/* <!-- Container 1 --> */}
        <div class="container1"></div>
        <Catalog />
        <CircuitDesign />
        <CircuitController />
        <DispCode />
      </div>
    </div>
  );
}
export default Container1;
