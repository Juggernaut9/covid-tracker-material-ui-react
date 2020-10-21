import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ data, attribute = "confirmed" }) {
  console.log(data);
  console.log(attribute);
  const buildChartData = (duration) => {
    let chartData = [];
    if (duration === "all") {
      for (let date in data["MH"].dates) {
        let newDataPoint = {
          x: date,
          y: data["MH"]["dates"][date]["total"]["confirmed"],
        };
        chartData.push(newDataPoint);
      }
      return chartData;
    } else if (duration === "3") {
      const dateDuration = new Date().getTime() - 1000 * 60 * 60 * 24 * 90;
      for (let date in data["MH"].dates) {
        // const dateToday = new Date();
        const dataDate = new Date(
          date.split("-")[0],
          date.split("-")[1],
          date.split("-")[2]
        );
        if (dateDuration - dataDate.getTime() <= 0) {
          let newDataPoint = {
            x: date,
            y: data["MH"]["dates"][date]["total"]["confirmed"],
          };
          chartData.push(newDataPoint);
        }
      }
      return chartData;
    }
  };

  console.log("buildChartData", buildChartData("3"));

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "YY-MM-DD",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return value;
            },
          },
        },
      ],
    },
  };

  return (
    <Line
      data={{
        // labels: ["red", "blue", "yellow", "green"],
        datasets: [
          {
            label: "confirmed total cases in maharashtra",
            data: buildChartData("3"),
          },
        ],
      }}
      options={options}
    />
  );
}

export default Chart;
