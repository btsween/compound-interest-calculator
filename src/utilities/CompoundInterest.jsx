export const createInterestInfo = (inital, monthly, time, rate) => {
  let yVals = [inital];
  let xVals = [0];
  let current = inital;
  for (let i = 1; i <= time; i++) {
    current = (1 + rate / 100) * current;
    xVals.push(i);
    yVals.push(current);
  }
  return {
    labels: xVals,
    values: yVals,
  };
};
