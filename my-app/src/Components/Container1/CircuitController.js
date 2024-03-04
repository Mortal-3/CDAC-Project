// Creating a CircuitDesign Area Controller  in which div element contain 4 button in a column in whic 1 btn is for add new rows ,2 btn is for back one step (undo) ,3rd btn is for forward one step (redo) and 4th btn is for reset the whole circuit clean.
import React from "react";
// import "./../StyleComponent/CircuitController.css";
// import "./../StyleComponent/utility.css";
function CircuitController() {
  return (
    <div className="Controller">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary shadow-border"
          style={{ marginTop: "4vh" }}
        >
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
