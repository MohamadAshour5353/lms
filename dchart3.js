const ctx3 = document.getElementById("storage").getContext("2d");
const storage = new Chart(ctx3, {
  type: "polarArea",
  data: {
    labels: ["HDD Laptops", "SSD Laptops"],
    datasets: [
      {
        label: "Number Of Laptops",
        data: [65, 59],
        backgroundColor: ["#041d66", "#5DB7DE"],
        borderColor: ['#ffffff'],
        borderWidth: 4,
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
