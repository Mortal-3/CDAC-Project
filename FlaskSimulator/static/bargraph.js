document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch the number of <tr> elements in the table
  function countRows() {
    var rowCount = document.querySelectorAll("#bits tbody tr").length;
    console.log("Number of rows:", rowCount);
    return rowCount;
  }

  // Call the countRows function initially
  var rowCount = countRows();

  // Observer to watch for changes in the table
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      // If nodes are added or removed, call countRows function again
      if (mutation.type === "childList") {
        rowCount = countRows();
        updateChart(); // Update the chart with new data
      }
    });
  });

  // Configure the observer to watch for changes in the table
  var config = { childList: true, subtree: true };

  // Start observing the table for changes
  observer.observe(document.getElementById("bits"), config);

  // Function to generate binary values based on the number of rows
  function generateBinaryValues(rowCount) {
    var binaryValues = [];
    for (var i = 0; i < Math.pow(2, rowCount); i++) {
      binaryValues.push(i.toString(2).padStart(rowCount, "0"));
    }
    return binaryValues;
  }

  // Function to update the chart with new data
  function updateChart() {
    var xValues = generateBinaryValues(rowCount);
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: fadedGreyColors,
            data: yValues,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "HPC_Quantum Simulation Probablity",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                max: 100,
                min: 0,
                stepSize: 20,
                callback: function (value) {
                  return value; // return the value itself
                },
              },
            },
          ],
        },
      },
    });
  }

  // Initial chart setup
  var xValues = generateBinaryValues(rowCount);
  var yValues = [100, 80, 60, 40, 20, 0];
  var fadedGreyColors = Array.from(
    { length: xValues.length },
    () => "rgba(169, 169, 169, 0.5)"
  ); // Faded grey colors
  updateChart();
});
