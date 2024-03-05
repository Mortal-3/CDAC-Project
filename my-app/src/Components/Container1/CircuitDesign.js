import React from "react";
import "./../../StyleComponent/Container1/CircuitDesign.css";
import "./../../StyleComponent/utility.css";
function CircuitDesign() {
  const allowDrop = (event) => {
    event.preventDefault();
  };

  // const drag = (event) => {
  //   // Store the dragged element's ID from table 1
  //   event.dataTransfer.setData("text/plain", event.target.alt);
  // };

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
    // <div className="circuitDesign">
    <>
      {/* <!-- Table for the quantum circuit design --> */}
      <div className="circuitDesign scroll-x scroll-y " id="circuitDesign">
        <table
          className="circuitTable mytable1 table table-success table-striped"
          id="table2"
          onDrop={dropLogo}
          onDragOver={allowDrop}
        >
          <thead>
            <tr id="circuitHeading">
              {/* <!-- Heading for Base State and Gates 1-20 --> */}
              <th>Base State</th>
              {/* <!-- Columns 1 to 20 --> */}
              <th>Gate 1</th>
              <th>Gate 2</th>
              <th>Gate 3</th>
              <th>Gate 4</th>
              <th>Gate 5</th>
              <th>Gate 6</th>
              <th>Gate 7</th>
              <th>Gate 8</th>
              <th>Gate 9</th>
              <th>Gate 10</th>
              <th>Gate 11</th>
              <th>Gate 12</th>
              <th>Gate 13</th>
              <th>Gate 14</th>
              <th>Gate 15</th>
              <th>Gate 16</th>
              <th>Gate 17</th>
              <th>Gate 18</th>
              <th>Gate 19</th>
              <th>Gate 20</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            <tr>
              {/* <!-- Dropdown for Base State in the first column --> */}
              <td>
                <select>
                  <option value="|0⟩">|0⟩</option>
                  <option value="|1⟩">|1⟩</option>
                </select>
              </td>
              {/* <!-- Empty drop-area cells for Gates 1-20 --> */}
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
              <td
                className="circuitBox drop-area"
                onDrop={dropLogo}
                onDragOver={allowDrop}
              ></td>
            </tr>
            {/* <!-- ... Repeat the above row structure for more rows --> */}
            {/* <!-- ************************************************* --> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CircuitDesign;
