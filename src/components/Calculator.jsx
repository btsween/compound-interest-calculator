import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import InterestForm from "./InterestForm";

const CalculatorWrapper = styled.div`
  flex: 1;
`;

const ChartWrapper = styled.div`
  width: 60%;
  height: 40%;
  // TODO: cap these?
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
