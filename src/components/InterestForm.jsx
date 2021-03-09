import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createInterestInfo } from "../utilities/CompoundInterest";
import FormCard from "./FormCard";
import Colors from "../assets/Colors";
import InfoCard from "./InfoCard";
import InfoText from "../assets/content/InfoText";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30rem;

  @media (min-width: 1200px) {
    width: inherit;
    max-width: 43rem;
  }
`;

const StyledInput = styled.button`
  background-color: #4782da;
  font-family: Roboto-Medium;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: ${Colors.white};
  text-decoration: none;
  height: 5rem;
  width: 12rem;
  font-size: 18px;
  margin: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  border: solid 2px ${Colors.white};
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
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
    <FormWrapper>
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
          <FormCard
            value={returnRate}
            handleBlur={handleBlur}
            onChange={setReturnRate}
            labelText={"Difference in Rates"}
          />
          <StyledInput type="submit">CALCULATE</StyledInput>
        </InputWrapper>
      </StyledForm>
      {InfoText.info.map(() => {
        return <InfoCard></InfoCard>;
      })}
      {/* <InfoCard></InfoCard> */}
    </FormWrapper>
  );
};

export default InterestForm;
