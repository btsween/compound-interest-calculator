import React, { useEffect, useState } from "react";
import { createInterestInfo } from "../utilities/CompoundInterest";

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
    console.log(initialAmount + 200);
    console.log(monthlyAmount + 200);
    console.log(timeInvested + 200);
    console.log(returnRate + 200);
    if (validForm) {
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

  useEffect(() => {
    onSetChartData(
      createInterestInfo(initialAmount, monthlyAmount, timeInvested, returnRate)
    );
  }, []);

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
      console.log("form has been validated: ", formName);
      inputRefined = parseInt(value);
      console.log("form value is ", inputRefined + 100);
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
