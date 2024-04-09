function handleSubmit() {
  const dataTable = document.getElementById("dataTable");
  const matrix = [];
  console.log("My data table matrix after submit:\n", dataTable);

  // Iterate over each row in dataTable
  dataTable.querySelectorAll("tr").forEach((row) => {
    const rowData = [];
    let previousCellWasFilled = false;

    // Iterate over each cell in the row
    row.querySelectorAll("td").forEach((cell) => {
      // Check if the cell is filled
      const isCellFilled = cell.children.length > 0;

      if (isCellFilled) {
        // Push "I" for any preceding empty cells
        if (!previousCellWasFilled) {
          rowData.push("I");
        }

        // Get the ID (text) of the image in the cell
        const imageId = cell.firstElementChild.id;
        rowData.push(imageId);

        // Set the flag to true for the current filled cell
        previousCellWasFilled = true;
      } else {
        // Set the flag to false for the current empty cell
        previousCellWasFilled = false;
      }
    });

    // Push the row data to the matrix if there's any content
    if (rowData.length > 0) {
      matrix.push(rowData);
    }
  });

  console.log("Matrix:");
  matrix.forEach((row) => {
    console.log("[ " + row.join("  , ") + " ]");
  });

  console.log("Number of rows with content: " + matrix.length);
}
