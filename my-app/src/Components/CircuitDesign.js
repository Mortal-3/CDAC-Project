import React from "react";

function CircuitDesign() {
  return (
    <div className="circuitDesign">
      <div class="circuit-right">
        {/* <!-- Table for the quantum circuit design --> */}
        <div class="circuitDesign scroll-x scroll-y" id="circuitDesign">
          <table
            class="circuitTable mytable1"
            id="table2"
            ondrop="dropLogo(event)"
            ondragover="allowDrop(event)"
          >
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
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
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
              <td
                class="circuitBox drop-area"
                ondrop="dropLogo(event)"
                ondragover="allowDrop(event)"
              ></td>
            </tr>
            {/* <!-- ... Repeat the above row structure for more rows --> */}
            {/* <!-- ************************************************* --> */}
          </table>
        </div>
      </div>
    </div>
  );
}

export default CircuitDesign;
