export const createInterestInfo = (
  initial,
  monthly,
  time,
  rate,
  isMonthlyCompoudnding
) => {
  let compoundingInterval = isMonthlyCompoudnding === true ? 12 : 1;
  let yVals = [initial];
  let xVals = [0];
  let current = initial;

  for (let idx = 1; idx <= time * compoundingInterval; idx++) {
    current += (current * rate) / 100 / compoundingInterval;
    current += (monthly * 12) / compoundingInterval;
    if (idx % 12 === 0 && isMonthlyCompoudnding) {
      xVals.push(idx / 12);
      yVals.push(Math.round(current));
    } else if (!isMonthlyCompoudnding) {
      xVals.push(idx);
      yVals.push(Math.round(current));
    }
  }
  return {
    labels: xVals,
    values: yVals,
  };
};
