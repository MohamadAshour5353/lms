const ctx1 = document.getElementById("laptopbrand").getContext("2d");
const laptopbrand = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["LENOVO", "DELL", "HP", "TOSHIBA", "ASUS", "ACER", "SAMSUNG"],
    datasets: [
      {
        axis: "y",
        label: "number of laptops",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: [
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66"
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      legend: {
        labels: {
          filter: function (item, chart) {
            // Logic to remove a label from chart box
            return item.text !== "number of laptops";
          },
        },
      },
    },
  },
});
