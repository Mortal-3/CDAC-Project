// Arrays to store the history of dropped images and their corresponding cells
let dropHistory = [];
let redoHistory = [];

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  // Store the dragged element's ID from table 1
  event.dataTransfer.setData("text/plain", event.target.alt);
}

// Select all elements with class 'drop-area' inside elements with class 'circuitBox'

// Select the table element and also updating the number of rows in the table
const table2Cells = document.querySelector(".table2 tbody");

// Function to update the rowCount variable
function updateRowCount() {
  rowCount = table2Cells.querySelectorAll("tr").length;
}

// Initial call to updateRowCount to set the initial value
updateRowCount();

// Observer to watch for changes in the table
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // If nodes are added or removed, update the rowCount variable
    if (mutation.type === "childList") {
      updateRowCount();
    }
  });
});

// Configure the observer to watch for changes in the table
const config = { childList: true, subtree: true };

// Start observing the table for changes
observer.observe(table2Cells, config);

// Define the dropLogo function outside of the if condition
// Define the dropLogo function outside of the if condition
function dropLogo(e) {
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
  }
  const newImage = createImageElement(draggedImageAlt);
  // nextEmptyCell.appendChild(newImage);
  // Apply the condition and call dropLogo function when condition is met
  if (
    newImage.id === "Pauli-X" ||
    newImage.id === "Pauli-Y" ||
    newImage.id === "Pauli-Z" ||
    newImage.id === "Hadamard" ||
    newImage.id === "S" ||
    newImage.id === "T"
  ) {
    // ********************************Single bit gate Applied
    nextEmptyCell.appendChild(newImage);
    console.log(newImage.id, "gate inserted into circuit");
  } else if (
    (newImage.id === "CNOT" ||
      newImage.id === "CZ" ||
      newImage.id === "Swap") &&
    rowCount >= 2
  ) {
    // Check if table2 has at least 2 rows
    // ******************************** Bit Gate Applied
    console.log(rowCount.length);
    console.log(newImage.id, "gate inserted into circuit");
    console.log("2 bit gate Updated soon .....!");
  } else if (newImage.id === "Toffoli" && rowCount >= 3) {
    console.log(rowCount.length);
    console.log(newImage.id, "gate inserted into circuit");
    console.log("Multi-bit gate updated soon .....!");
  } else if (newImage.id === "Measurement") {
    console.log(newImage.id, "gate inserted into circuit");
    console.log("Multi-bit gate updated soon .....!");
  } else if (newImage.id === "reset") {
    console.log(newImage.id, "gate inserted into circuit");
    console.log("Reset Not Working");
  }

  // Add the dropped image and its corresponding cell to the history
  dropHistory.push({ cell: targetCell, image: newImage });

  // Clear redo history when a new drop occurs
  redoHistory = [];
}

// Function to create a new image element
function createImageElement(altText) {
  // Extract the filename from the altText (assuming it's a URL)
  const filename = altText.split("/").pop().split(".")[0];

  // Create the new image element
  const newImage = document.createElement("img");
  newImage.src = altText;
  newImage.alt = filename;
  newImage.id = filename; // Set the id attribute to the filename

  // Set the width and height of the new image to 1cm x 1cm
  newImage.style.width = "1cm";
  newImage.style.height = "1cm";
  newImage.style.zIndex = "1";
  newImage.style.opacity = "1";
  newImage.style.backgroundColor = "#f9e0b3";
  // console.log("Created Image = ", newImage.id);
  return newImage;
}

// Function to handle the undo button click event
function undoDrop() {
  // Check if there are any items in the drop history
  if (dropHistory.length > 0) {
    // Remove the last item from the drop history
    const lastDrop = dropHistory.pop();

    // Move the undone image to the redo history
    redoHistory.push(lastDrop);

    // Remove the image from its corresponding cell
    lastDrop.cell.removeChild(lastDrop.image);
  }
}

// Function to handle the redo button click event
function redoDrop() {
  // Check if there are any items in the redo history
  if (redoHistory.length > 0) {
    // Remove the last item from the redo history
    const lastRedo = redoHistory.pop();

    // Move the redo image back to the drop history
    dropHistory.push(lastRedo);

    // Append the redo image back to its corresponding cell
    lastRedo.cell.appendChild(lastRedo.image);
  }
}
// **************************************************

// Get all the images with class 'gateButton'
var images = document.querySelectorAll(".gateButton img");
