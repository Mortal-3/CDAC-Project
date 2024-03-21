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
    const newImage = createImageElement(draggedImageAlt);
    nextEmptyCell.appendChild(newImage);
  }
}

// Function to create a new image element
function createImageElement(altText) {
  const newImage = document.createElement("img");
  newImage.src = altText; // Assuming the alt text contains the image source
  newImage.alt = altText;

  // Set the width and height of the new image to 1cm x 1cm
  newImage.style.width = "1cm";
  newImage.style.height = "1cm";
  // newImage.style.background = "#ded298";

  return newImage;
}
