import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import InterestForm from "./InterestForm";
import Colors from "../assets/Colors";

const CalculatorWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  background-color: ${Colors.offWhite};
`;

const ChartWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  width: 80%;
  background-color: ${Colors.white};
  border-radius: 0.5rem;
`;

function Calculator() {
  const [chartData, setChartData] = useState({
    labels: [],
    values: [],
  });

  return (
    <CalculatorWrapper>
      <InterestForm onSetChartData={setChartData} />
      <ChartWrapper className="wrapper">
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
      </ChartWrapper>
    </CalculatorWrapper>
  );
}

export default Calculator;
