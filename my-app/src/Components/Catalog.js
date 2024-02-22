import React from "react";

function Catalog() {
  return (
    <div className="catalog-left">
      <div className="catalog-left flexbody">
        <table className="gateTable fit logoTable" id="table1">
          <thead>
            <tr>
              <th colSpan="2" id="gateHeading">
                Quantum Gate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image\Pauli-X.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Pauli-X"
                  />
                </div>
              </td>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Pauli-Y.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Pauli-Y"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Pauli-Z.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Pauli-Z"
                    srcset=""
                  />{" "}
                </div>
              </td>
              <td>
                <div className="gateButton" draggable="true">
                  <img
                    src="..\Image/Hadamard.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Hadamard"
                    srcset=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/S.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="T"
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/T.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="S"
                    srcset=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Rx.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="T"
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Ry.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="S"
                    srcset=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/CNOT.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Cnot"
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/CZ.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="CZ"
                    srcset=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Swap.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="SWAP"
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Toffoli.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Toffoli"
                    srcset=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Measurement.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Measurement"
                  />
                </div>
              </td>
              <td>
                <div className="gateButton circuitBox" draggable="true">
                  <img
                    src=".\Image/Reset.png"
                    style={{ height: "1cm", width: "1cm" }}
                    alt="Reset"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Catalog;
