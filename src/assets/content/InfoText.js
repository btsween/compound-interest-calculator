const FormNames = require("../../constants/FormNames");

module.exports = {
  info: [
    {
      header: "Initial Value",
      body: [
        `Initial value is represnted as 'P', and represents the amount before compounding takes place.`,
        `The growth over time is directly proportional to 'P', which makes it an important variable but not as important as time or rate!`,
      ],
      id: "info-card-initial-value",
      formName: FormNames.INITIAL,
    },
    {
      header: "Monthly Contribution",
      body: [
        `Monthly contribution is not represented in the above equation, but can be viewed as an increase in 'P' per month.`,
        `This model applies the contribution before the monthly compounding is applied.`,
        `A small amount contributed over a long period of time can make a huge impact!`,
      ],
      id: "info-card-monthly-contribution",
      formName: FormNames.MONTHLY,
    },
    {
      header: "Rate of Return",
      body: [
        `Rate of return is represented as 'R' in the above equation, and represents the percent rate of growth per unit of time (years in this model).`,
        `Since 'R' is an exponential term, it can make a huge impact the overall calculation!`,
        `Try a range of 'R' values to see the difference.`,
      ],
      id: "info-card-rate",
      formName: FormNames.RATE,
    },
    {
      header: "Time",
      body: [
        `Rate of return is represented as 'R' in the above equation, and represents the percent rate of growth per unit of time (years in this model).`,
        `Since 'R' is an exponential term, it can make a huge impact the overall calculation!`,
        `Try a range of 'R' values to see the difference.`,
      ],
      id: "info-card-time",
      formName: "TIME",
    },
    {
      header: "Difference of Rates",
      body: [
        `Rate of return is represented as 'R' in the above equation, and represents the percent rate of growth per unit of time (years in this model).`,
        `Since 'R' is an exponential term, it can make a huge impact the overall calculation!`,
        `Try a range of 'R' values to see the difference.`,
      ],
      id: "info-card-difference",
      formName: FormNames.COMPOUND,
    },
  ],
};
