export const createInterestInfo = (initial, monthly, time, rate) => {
  // TODO: need to parse these before input...
  // TODO: formula for interest calculation?
  let i = parseInt(initial);
  let t = parseInt(time);
  let r = parseInt(rate);
  let m = parseInt(monthly);
  r = r / 100 / 12;

  let yVals = [i];
  let xVals = [0];
  let current = i;

  for (let idx = 1; idx <= t * 12; idx++) {
    current += m;
    current += current * 0.005;
    if (idx % 12 === 0) {
      xVals.push(idx / 12);
      yVals.push(current);
    }
  }
  return {
    labels: xVals,
    values: yVals,
  };
};
