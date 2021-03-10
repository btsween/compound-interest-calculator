import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createInterestInfo } from "../utilities/CompoundInterest";
import FormCard from "./FormCard";
import Colors from "../assets/Colors";
import InfoCard from "./InfoCard";
import InfoText from "../assets/content/InfoText";
import FormNames from "../constants/FormNames";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 31rem;

  @media (min-width: 1400px) {
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
  height: 6rem;
  width: 12rem;
  font-size: 18px;
  margin: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
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

  const [activeForm, setActiveForm] = useState(FormNames.INITIAL);

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
      case FormNames.INITIAL:
        if (inputRefined < 0 || inputRefined > 20000000) {
          setFormsValid((prevState) => ({ ...prevState, INITIAL: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, INITIAL: true }));
          setInitialAmount(inputRefined);
        }
        break;
      case FormNames.MONTHLY:
        if (inputRefined < 0 || inputRefined > 1000000) {
          setFormsValid((prevState) => ({ ...prevState, MONTLY: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, MONTLY: true }));
          setMonthlyAmount(inputRefined);
        }
        break;
      case FormNames.TIME:
        if (inputRefined < 0 || inputRefined > 100) {
          setFormsValid((prevState) => ({ ...prevState, TIME: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, TIME: true }));
          setTimeInvested(inputRefined);
        }
        break;
      case FormNames.RATE:
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
          {/* TODO: form cards should be dynamic */}
          <FormCard
            value={initialAmount}
            handleBlur={handleBlur}
            onChange={setInitialAmount}
            labelText={"Initial Amount"}
            onClick={setActiveForm}
            form={FormNames.INITIAL}
            activeForm={activeForm}
          />
          <FormCard
            value={monthlyAmount}
            handleBlur={handleBlur}
            onChange={setMonthlyAmount}
            labelText={"Monthly Investment"}
            onClick={setActiveForm}
            form={FormNames.MONTHLY}
            activeForm={activeForm}
          />
          <FormCard
            value={timeInvested}
            handleBlur={handleBlur}
            onChange={setTimeInvested}
            labelText={"Years Invested"}
            onClick={setActiveForm}
            form={FormNames.TIME}
            activeForm={activeForm}
          />
          <FormCard
            value={returnRate}
            handleBlur={handleBlur}
            onChange={setReturnRate}
            labelText={"Rate of Return"}
            onClick={setActiveForm}
            form={FormNames.RATE}
            activeForm={activeForm}
          />
          <FormCard
            value={returnRate}
            handleBlur={handleBlur}
            onChange={setReturnRate}
            labelText={"Difference in Rates"}
            onClick={setActiveForm}
            form={FormNames.COMPOUND}
            activeForm={activeForm}
          />
          <StyledInput type="submit">CALCULATE</StyledInput>
        </InputWrapper>
      </StyledForm>
      {InfoText.info.map((info, index) => {
        return (
          <InfoCard
            key={index}
            id={info.id}
            info={info}
            activeForm={activeForm}
          ></InfoCard>
        );
      })}
    </FormWrapper>
  );
};

export default InterestForm;
