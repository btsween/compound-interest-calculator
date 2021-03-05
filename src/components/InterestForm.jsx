import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createInterestInfo } from "../utilities/CompoundInterest";
import FormCard from "./FormCard";
import Colors from "../assets/Colors";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30rem;
`;

const StyledInput = styled.button`
  height: 2rem;
  width: 6rem;
  background-color: #4782da;
  border-radius: 0.5rem;
  color: ${Colors.white};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: rem;
  background-color: ${Colors.white};
  flex-direction: column;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const InterestForm = ({ onSetChartData }) => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [monthlyAmount, setMonthlyAmount] = useState(100);
  const [timeInvested, setTimeInvested] = useState(20);
  const [returnRate, setReturnRate] = useState(5);
  const [formsValid, setFormsValid] = useState({
    INITIAL: true,
    MONTLY: true,
    TIME: true,
    RATE: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = !Object.values(formsValid).includes(false);
    if (validForm) {
      onSetChartData(
        createInterestInfo(
          initialAmount,
          monthlyAmount,
          timeInvested,
          returnRate
        )
      );
    }
  };

  useEffect(() => {
    onSetChartData(
      createInterestInfo(initialAmount, monthlyAmount, timeInvested, returnRate)
    );
  }, []);

  const validateIsNumeric = (input) => {
    const regex = /^[0-9]*$/gm;
    return regex.test(input);
  };

  const handleBlur = (value, formName) => {
    value.trim();

    let inputRefined;

    if (!validateIsNumeric(value)) {
      setFormsValid((prevState) => ({ ...prevState, formName: false }));
      return;
    } else {
      inputRefined = parseInt(value);
    }

    switch (formName) {
      case "INITIAL":
        if (inputRefined < 0 || inputRefined > 20000000) {
          setFormsValid((prevState) => ({ ...prevState, INITIAL: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, INITIAL: true }));
          setInitialAmount(inputRefined);
        }
        break;
      case "MONTHLY":
        if (inputRefined < 0 || inputRefined > 1000000) {
          setFormsValid((prevState) => ({ ...prevState, MONTLY: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, MONTLY: true }));
          setMonthlyAmount(inputRefined);
        }
        break;
      case "TIME":
        if (inputRefined < 0 || inputRefined > 100) {
          setFormsValid((prevState) => ({ ...prevState, TIME: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, TIME: true }));
          setTimeInvested(inputRefined);
        }
        break;
      case "RATE":
        if (inputRefined < 0 || inputRefined > 100) {
          setFormsValid((prevState) => ({ ...prevState, RATE: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, RATE: true }));
          setReturnRate(inputRefined);
        }
        break;
      default: {
        console.log("Update to uknown form type : " + formName);
      }
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <FormCard
          value={initialAmount}
          handleBlur={handleBlur}
          onChange={setInitialAmount}
          labelText={"Initial Amount"}
        />
        <FormCard
          value={monthlyAmount}
          handleBlur={handleBlur}
          onChange={setMonthlyAmount}
          labelText={"Monthly Investment"}
        />
        <FormCard
          value={timeInvested}
          handleBlur={handleBlur}
          onChange={setTimeInvested}
          labelText={"Years Invested"}
        />
        <FormCard
          value={returnRate}
          handleBlur={handleBlur}
          onChange={setReturnRate}
          labelText={"Rate of Return"}
        />
      </InputWrapper>
      <InfoWrapper>
        <h1>Info</h1>
        <span>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </span>
      </InfoWrapper>
      <StyledInput type="submit">Calculate</StyledInput>
    </StyledForm>
  );
};

export default InterestForm;
