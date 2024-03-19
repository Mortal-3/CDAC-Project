const mytable = document.getElementById("table2");
console.log("My mytable ", mytable);
let timer;

// Function to handle the delay and execution of the code
const handleDelayedExecution = () => {
  clearTimeout(timer); // Clear any existing timer
  timer = setTimeout(() => {
    let maxX = 0;
    let maxY = 0;

    // Get the mytable element by its id
    const mytable = document.getElementById("mytable");

    // Loop through each row in the mytable
    for (let i = 0; i < mytable.rows.length; i++) {
      let filledCellsCount = 0;

      // Loop through each cell in the row
      for (let j = 0; j < mytable.rows[i].cells.length; j++) {
        // Check if the cell is filled
        if (mytable.rows[i].cells[j].innerText !== "") {
          filledCellsCount++;
        }
      }

      // Update maxX and maxY if necessary
      if (filledCellsCount > maxX) {
        maxX = filledCellsCount;
        maxY = i + 1; // Row index starts from 0, so add 1
      }
    }

    console.log("X: " + maxX + ", Y: " + maxY);
  }, 4000); // Set the delay to 4 seconds
};

// Event listener for the blur event on mytable cells
document.querySelectorAll("#mytable td").forEach((cell) => {
  cell.addEventListener("blur", handleDelayedExecution);
});
// Output the results to HTML elements with id="result-x" and id="result-y"
// Access the cell using mytable.rows[i].cells[j]
// console.log(
//   "Row " +
//     (i + 1) +
//     ", Cell " +
//     (j + 1) +
//     ": " +
//     mytable.rows[i].cells[j].innerText
// );
