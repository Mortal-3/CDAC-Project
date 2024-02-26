import React from "react";
import "./../StyleComponent/Container1.css";
import "./../StyleComponent/Catalog.css";
import "./../StyleComponent/utility.css";
import "./../StyleComponent/ContainerManagement.css";
import "./../StyleComponent/CircuitController.css";
import Catalog from "./Container1/Catalog";
import CircuitDesign from "./Container1/CircuitDesign";
import CircuitController from "./Container1/CircuitController";
import DispCode from "./Container1/DispCode";
function Container1() {
  return (
    <div class="mainBody" id="simulator">
      {/* <!-- Container 1 --> */}
      <div class="container1">
        <Catalog />
        <CircuitDesign />
        <CircuitController />
        <DispCode />
      </div>
    </div>
  );
}
export default Container1;
