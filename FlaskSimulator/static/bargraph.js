var xValues = ["0000", "0001", "0011", "0111", "1111"];
var yValues = [100, 80, 60, 40, 20, 0];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
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
