const ctx4 = document.getElementById("laptoplocation").getContext("2d");
const laptoplocation = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [
      "Damascus",
      "Rural Damascus",
      "Daraa",
      "Aleepo",
      "Raqqa",
      "Al Hassakeh",
      "Qamishli",
      "Homs",
      "Hama",
      "Deir Ezzor",
      "Quneitra",
      "Lattakia",
      "Tartous",
      "Al Sweida",
    ],
    datasets: [
      {
        label: "Number Of Laptops",
        data: [12, 19, 3, 5, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        backgroundColor: [
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
          "#041d66",
          "#5DB7DE",
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
