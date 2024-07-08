const numWaterBottles = function (numBottles, numExchange) {
  let total = 0;

  let filled = numBottles;

  while (filled > 0) {
    total += filled;
    let diff = numBottles % numExchange;
    filled = Math.trunc(numBottles / numExchange);
    numBottles = filled + diff;
  }

  return total;
};

console.log(numWaterBottles(9, 3), "result1");
