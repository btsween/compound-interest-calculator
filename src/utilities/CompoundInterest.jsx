export const createInterestInfo = (initial, monthly, time, rate) => {
  // TODO: need to parse these before input...
  // TODO: formula for interest calculation?
  // let i = parseInt(initial);
  // let t = parseInt(time);
  // let r = parseInt(rate);
  // let m = parseInt(monthly);
  // r = r / 100 / 12;

  console.log(initial + 200);
  console.log(monthly + 200);
  console.log(time + 200);
  console.log(rate + 200);

  let yVals = [initial];
  let xVals = [0];
  // let current = i;

  // for (let idx = 1; idx <= t * 12; idx++) {
  //   current += m;
  //   current += current * 0.005;
  //   if (idx % 12 === 0) {
  //     xVals.push(idx / 12);
  //     yVals.push(current);
  //   }
  // }
  let current = initial;
  for (let idx = 1; idx <= time * 12; idx++) {
    current += monthly;
    current += (current * rate) / 100 / 12;
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
