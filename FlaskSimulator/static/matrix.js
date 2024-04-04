function handleSubmit() {
  const dataTable = document.getElementById("dataTable");
  const matrix = [];

  // Find the maximum number of filled cells in any row
  let maxRowLength = 0;
  let numCols = 0;
  dataTable.querySelectorAll("tr").forEach((row) => {
    const filledCells = Array.from(row.querySelectorAll("td")).filter(
      (cell) => cell.children.length > 0
    );
    if (filledCells.length > maxRowLength) {
      maxRowLength = filledCells.length;
    }
    if (filledCells.length > 0) {
      numCols++;
    }
  });

  // Set the row size to the maximum number of filled cells in any row
  const numRows = maxRowLength;

  // Iterate over each row in dataTable
  dataTable.querySelectorAll("tr").forEach((row) => {
    const rowData = [];
    // Iterate over each cell in the row
    row.querySelectorAll("td").forEach((cell) => {
      // Get the ID (text) of the image in the cell, or 'I' if cell is empty
      const imageId = cell.firstElementChild ? cell.firstElementChild.id : "I";
      rowData.push(imageId);
    });
    // Fill the row with 'I' if it contains less than maxRowLength cells
    while (rowData.length < maxRowLength) {
      rowData.push("I");
    }
    matrix.push(rowData);
  });

  console.log("Matrix:");
  matrix.forEach((row) => {
    console.log("[ " + row.join("  , ") + " ]");
  });

  console.log("Rows: " + numRows);
  console.log("Columns: " + numCols);
}
