import React from "react";
import "./../StyleComponent/Catalog.css";
import "./../StyleComponent/utility.css";
import "./../StyleComponent/ContainerManagement.css";
function Catalog() {
  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event) => {
    // Store the dragged element's ID from table 1
    event.dataTransfer.setData("text/plain", event.target.alt);
  };

  const table2Cells = document.querySelectorAll(".circuitBox .drop-area");

  // Function to handle the drop event
  const dropLogo = (e) => {
    e.preventDefault();

    const targetCell = e.currentTarget;
    const draggedImageAlt = e.dataTransfer.getData("text/plain");

    // Find the adjacent row element
    const adjacentRow = targetCell.closest("tr");

    // Find the first available empty cell in the adjacent row
    const nextEmptyCell = Array.from(adjacentRow.children).find(
      (cell) => cell.childElementCount === 0
    );

    // If there is an empty cell in the adjacent row, drop the image
    if (nextEmptyCell) {
      // Check if the cell already contains an image, remove it
      if (nextEmptyCell.children.length > 0) {
        nextEmptyCell.removeChild(nextEmptyCell.children[0]);
      }
      const newImage = createImageElement(draggedImageAlt);
      nextEmptyCell.appendChild(newImage);
    }
  };

  // Function to create a new image element
  const createImageElement = (altText) => {
    const newImage = document.createElement("img");
    newImage.src = altText; // Assuming the alt text contains the image source
    newImage.alt = altText;

    // Set the width and height of the new image to 1cm x 1cm
    newImage.style.width = "1cm";
    newImage.style.height = "1cm";
    newImage.style.background = "#ded298";

    return newImage;
  };
  return (
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
                  srcSet=""
                />{" "}
              </div>
            </td>
            <td>
              <div className="gateButton" draggable="true">
                <img
                  src="..\Image/Hadamard.png"
                  style={{ height: "1cm", width: "1cm" }}
                  alt="Hadamard"
                  srcSet=""
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
                  srcSet=""
                />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img
                  src=".\Image/T.png"
                  style={{ height: "1cm", width: "1cm" }}
                  alt="S"
                  srcSet=""
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
                  srcSet=""
                />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img
                  src=".\Image/Ry.png"
                  style={{ height: "1cm", width: "1cm" }}
                  alt="S"
                  srcSet=""
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
                  srcSet=""
                />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img
                  src=".\Image/CZ.png"
                  style={{ height: "1cm", width: "1cm" }}
                  alt="CZ"
                  srcSet=""
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
                  srcSet=""
                />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img
                  src=".\Image/Toffoli.png"
                  style={{ height: "1cm", width: "1cm" }}
                  alt="Toffoli"
                  srcSet=""
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
  );
}

export default Catalog;
