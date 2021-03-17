const FormNames = require("../../constants/FormNames");

module.exports = {
  info: [
    {
      header: "Initial Value",
      body: [
        `Initial value is represnted as 'P', and represents the amount before compounding takes place.`,
        `Although starting amount is important, some of the most impressive changes come from time and rate of return.`,
        `Try both large and small values for 'P' to see how it affects total return.`,
      ],
      id: "info-card-initial-value",
      formName: FormNames.INITIAL,
    },
    {
      header: "Monthly Contribution",
      body: [
        `As the above equation is simplified to not include contributions, this variable is not accounted for.`,
        `In this model, Monthly Conribution can be thought of as a change in 'P' at each compounding period.`,
        `A monthly contribution is a great way to offset a low initial amount.`,
      ],
      id: "info-card-monthly-contribution",
      formName: FormNames.MONTHLY,
    },
    {
      header: "Rate of Return",
      body: [
        `Rate of return is represented as 'r' in the above equation, and represents the percent rate of growth per unit of time (years in this model).`,
        `Stock market returns have been about 5% - 8% annualized, small differences to rate over time have huge impact.`,
        `Enter a percent rate of return (0 - 50), and observe how crucial this is to growth.`,
      ],
      id: "info-card-rate",
      formName: FormNames.RATE,
    },
    {
      header: "Time",
      body: [
        `Time invested is represented as 't', and is measured in years invested in this model.`,
        `As 't' falls in the exponent of the equation, it will have a big impact.`,
        `See the difference between hypothetical values 30 and 35, just a few years difference can lead to huge growth because this is exponential.`,
      ],
      id: "info-card-time",
      formName: "TIME",
    },
    {
      header: "Compounding Period",
      body: [
        `Compounding period is represented as 'n', and represents the amount of times compounded per unit of time (years in this model).`,
        `This factor may not be in our control always, but shorter compounding periods are beneficial to growth.`,
        `Try out two common compounding periods in the model.`,
      ],
      id: "info-card-difference",
      formName: FormNames.COMPOUND,
    },
  ],
};
