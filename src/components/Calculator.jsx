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

const TotalAmountIndicator = styled.div`
  display: flex;
  padding-bottom: 1rem;
  justify-content: center;
`;

const TotalAmountText = styled.div`
  font-face: Roboto-Medium;
  font-size: 35px;
  text-align: center;
`;

function Calculator() {
  const [chartData, setChartData] = useState({
    labels: [],
    values: [],
  });

  return (
    <CalculatorWrapper>
      <InterestForm onSetChartData={setChartData} />
      {chartData.values && chartData.labels && (
        <TotalAmountIndicator>
          <TotalAmountText>
            Total amount after {chartData.labels.length - 1} years is{" $"}
            {chartData.values[chartData.values.length - 1]}
          </TotalAmountText>
        </TotalAmountIndicator>
      )}
      <ChartWrapper id="calculator-line-chart">
        <Line
          data={{
            labels: chartData.labels,
            datasets: [
              {
                data: chartData.values,
                backgroundColor: [Colors.lightBlue],
                borderWidth: 3,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Compound Interest",
              fontSize: 26,
            },
            legend: {
              display: false,
            },
          }}
        />
      </ChartWrapper>
    </CalculatorWrapper>
  );
}

export default Calculator;
