// Creating a CircuitDesign Area Controller  in which div element contain 4 button in a column in whic 1 btn is for add new rows ,2 btn is for back one step (undo) ,3rd btn is for forward one step (redo) and 4th btn is for reset the whole circuit clean.
import React from "react";
import "./../../StyleComponent/Container1/CircuitController.css";
function CircuitController({ addRow }) {
  return (
    <div className="Controller">
      <div
        className="btn-group d-flex flex-column"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn btn-secondary ">
          Add
        </button>
        <button type="button" className="btn btn-secondary">
          Back
        </button>
        <button type="button" className="btn btn-secondary">
          Forward
        </button>
        <button type="button" className="btn btn-secondary">
          Reset
        </button>
      </div>
    </div>
  );
}
export default CircuitController;
