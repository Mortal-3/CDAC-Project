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
const table2Cells = document.querySelectorAll(".circuitBox .drop-area");

// Function to handle the drop event
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
  nextEmptyCell.appendChild(newImage);
  // Add the dropped image and its corresponding cell to the history
  dropHistory.push({ cell: targetCell, image: newImage });

  // Clear redo history when a new drop occurs
  redoHistory = [];
}

// Function to create a new image element
function createImageElement(altText) {
  const newImage = document.createElement("img");
  newImage.src = altText; // Assuming the alt text contains the image source
  newImage.alt = altText;

  // Set the width and height of the new image to 1cm x 1cm
  newImage.style.width = "1cm";
  newImage.style.height = "1cm";
  newImage.style.zIndex = "1";
  // newImage.style.background = "#ded298";
  newImage.style.opacity = "1";
  newImage.style.backgroundColor = "orange";
  console.log("Created Image", newImage);
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
