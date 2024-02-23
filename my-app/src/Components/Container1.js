import React from "react";
import "./../StyleComponent/Container1.css";
import Catalog from "./Container1/Catalog";
import CircuitDesign from "./Container1/CircuitDesign";
import CircuitController from "./Container1/CircuitController";
import DispCode from "./Container1/DispCode";
function Container1() {
  return (
    <>
      <Catalog />
      <CircuitDesign />
      <CircuitController />
      <DispCode />
    </>
  );
}
export default Container1;
