import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import InterestForm from "./InterestForm";

function Calculator() {
  const [chartData, setChartData] = useState({
    //call same utility function get these values from intial state..
    labels: [0, 1, 2, 3, 4, 5],
    values: [88, 35, 73, 82],
  });

  return (
    <div>
      <InterestForm onSetChartData={setChartData} />
      <div className="wrapper">
        <Line
          data={{
            labels: chartData.labels,
            datasets: [
              {
                data: chartData.values,
                backgroundColor: ["rgba(255, 99, 132, 0.6)"],
                borderWidth: 3,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Calculator;
