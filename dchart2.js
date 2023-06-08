const ctx2 = document.getElementById("cpuinfo").getContext("2d");
const cpuinfo = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["i3/10", "i3/8", "i3/7", "i3/6", "i3/4", "i5/4", "i5/2"],
    datasets: [
      {
        label: "Number Of Laptops",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
        ],
        borderColor: [],
        borderWidth: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          filter: function (item, chart) {
            // Logic to remove a label
            return item.text !== "Number Of Laptops";
          },
        },
      },
    },
  },
});
