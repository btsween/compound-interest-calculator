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
      <ChartWrapper>
        <Line
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: "Compounded Interest",
                data: chartData.values,
                backgroundColor: [Colors.lightBlue],
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
