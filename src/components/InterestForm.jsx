import React, { useState } from "react";
import { createInterestInfo } from "../utilities/CompoundInterest";

const InterestForm = ({ onSetChartData }) => {
  const [initialAmount, setInitialAmount] = useState("1000");
  const [monthlyAmount, setMonthlyAmount] = useState("500");
  const [timeInvested, setTimeInvested] = useState("45");
  const [returnRate, setReturnRate] = useState("8");
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
      // call a function to actually generate data for our chart..
      onSetChartData(
        createInterestInfo(
          initialAmount,
          monthlyAmount,
          timeInvested,
          returnRate
        )
      );
    } else {
      // send an error ?
    }
  };

  // const createInterestInfo = () => {
  //   let i = 0;
  //   let interestValues = [];
  //   let currentVal = initialAmount;

  //   while (i < timeInvested) {
  //     interestValues.push(currentVal);
  //     currentVal *= 1 + returnRate / 100;
  //     i++;
  //   }

  //   onSetChartData(interestValues);
  // };

  const validateIsNumeric = (input) => {
    const regex = /^[0-9]*$/gm; // TODO: need a fix here since this does not register negative values.
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
        }
        break;
      case "MONTHLY":
        if (inputRefined < 0 || inputRefined > 1000000) {
          setFormsValid((prevState) => ({ ...prevState, MONTLY: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, MONTLY: true }));
        }
        break;
      case "TIME":
        if (inputRefined < 0 || inputRefined > 100) {
          setFormsValid((prevState) => ({ ...prevState, TIME: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, TIME: true }));
        }
        break;
      case "RATE":
        if (inputRefined < 0 || inputRefined > 100) {
          setFormsValid((prevState) => ({ ...prevState, RATE: false }));
        } else {
          setFormsValid((prevState) => ({ ...prevState, RATE: true }));
        }
        break;
      default: {
        console.log("Update to uknown form type : " + formName);
      }
    }
    console.log(formsValid);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Starting Amount</label>
      <input
        type="text"
        value={initialAmount}
        required
        onChange={(e) => setInitialAmount(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value, "INITIAL")}
      />
      <label>Amount per Month</label>
      <input
        type="text"
        value={monthlyAmount}
        required
        onChange={(e) => setMonthlyAmount(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value, "MONTHLY")}
      />
      <label>Time Invested</label>
      <input
        type="text"
        value={timeInvested}
        required
        onChange={(e) => setTimeInvested(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value, "TIME")}
      />
      <label>Rate of Return</label>
      <input
        type="text"
        value={returnRate}
        required
        onChange={(e) => setReturnRate(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value, "RATE")}
      />
      <input type="submit" value="submit form" />
    </form>
  );
};

export default InterestForm;
