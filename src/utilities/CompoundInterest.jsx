export const createInterestInfo = (initial, monthly, time, rate) => {
  // TODO: formula for interest calculation?
  let yVals = [initial];
  let xVals = [0];
  let current = initial;

  for (let idx = 1; idx <= time * 12; idx++) {
    current += monthly;
    current += (current * rate) / 100 / 12;
    if (idx % 12 === 0) {
      xVals.push(idx / 12);
      yVals.push(Math.round(current));
    }
  }
  return {
    labels: xVals,
    values: yVals,
  };
};
