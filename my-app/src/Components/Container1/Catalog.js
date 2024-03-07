import React, { useState } from "react";
import "./../../StyleComponent/Container1/Catalog.css";
function Catalog() {
  const [img, setImg] = useState("");
  const allowDrop = (event) => {
    event.preventDefault();
  };

  ///////// On Drop Event ////////////

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
    newImage.style.width = "0.8cm";
    newImage.style.height = "0.8cm";
    newImage.style.margin = "0";
    newImage.style.padding = "0";
    newImage.style.background = "#ded298";
    return newImage;
  };
  const [gate, setGate] = useState([]);
  const handleDrag = (e) => {
    const imgData = e.target.alt;
    setGate([...gate, imgData]);
  };
  console.log(gate);

  console.log("Selected gate", gate);
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
                  alt="Pauli-X"
                  onDragOver={handleDrag}
                />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Pauli-Y.png" alt="Pauli-Y" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Pauli-Z.png" alt="Pauli-Z" srcSet="" />{" "}
              </div>
            </td>
            <td>
              <div className="gateButton" draggable="true">
                <img src="..\Image/Hadamard.png" alt="Hadamard" srcSet="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/S.png" alt="T" srcSet="" />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/T.png" alt="S" srcSet="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Rx.png" alt="T" srcSet="" />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Ry.png" alt="S" srcSet="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/CNOT.png" alt="Cnot" srcSet="" />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/CZ.png" alt="CZ" srcSet="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Swap.png" alt="SWAP" srcSet="" />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Toffoli.png" alt="Toffoli" srcSet="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Measurement.png" alt="Measurement" />
              </div>
            </td>
            <td>
              <div className="gateButton circuitBox" draggable="true">
                <img src=".\Image/Reset.png" alt="Reset" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Catalog;
