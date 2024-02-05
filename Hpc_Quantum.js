
// // Function to create a new image element
// function createImageElement(altText) {
//   const newImage = document.createElement("img");
//   newImage.src = altText; // Assuming the alt text contains the image source
//   newImage.alt = altText;

//   // Set the width and height of the new image to 1cm x 1cm
//   newImage.style.width = '1cm';
//   newImage.style.height = '1cm';

//   return newImage;
// }

// **********************************************
// function allowDrop(event) {
//   event.preventDefault();
// }

// function drag(event) {
//   // Store the dragged element's ID table 1
//   event.dataTransfer.setData("text/plain", event.target.alt);
// }

// function dropLogo(event) {
//   event.preventDefault();

//   const table2Cell = event.target;
//   const draggedImageAlt = event.dataTransfer.getData("text/plain");

//   // If the cell already contains an image, remove it IN TABLE2
//   while (table2Cell.firstChild) {
//     table2Cell.removeChild(table2Cell.firstChild);
//   }
//   // Check if the cell already contains an image
//   const existingImage = table2Cell.querySelector("img");

//   // If there's an existing image, remove it
//   if (existingImage) {
//     table2Cell.removeChild(existingImage);
//   }

//   // Create a new image element with the dragged image's alt text
//   const newImage = document.createElement("img");
//   newImage.src = draggedImageAlt;
//   newImage.alt = draggedImageAlt;

//   // Set the width and height of the new image to 1cm x 1cm
//   newImage.style.width = "1cm";
//   newImage.style.height = "1cm";

//   // Append the new image to the cell in table2
//   table2Cell.appendChild(newImage);
// }
// *********************************************
// Third attempt
// Function to allow dropping elements


function allowDrop(event) {
  event.preventDefault();
}

// Function to handle the drag event
function drag(event) {
  // Store the dragged element's ID from table 1
  event.dataTransfer.setData("text/plain", event.target.alt);
}

// Function to handle the drop event
function dropLogo(event) {
  event.preventDefault();

  const table2Row = event.target.parentElement;
  const draggedImageAlt = event.dataTransfer.getData("text/plain");

  // Find the first available empty cell in the second column
  const nextEmptyCell = Array.from(table2Row.children)
    .find(cell => cell.childElementCount === 0);

  // Drop the image in the first available empty cell in the second column
  if (nextEmptyCell) {
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
  newImage.style.width = '1cm';
  newImage.style.height = '1cm';

  return newImage;
}
