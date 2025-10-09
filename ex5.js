let parse = (i) => {
  let o = parseInt(i);
  if (isNaN(o))
    throw("NaN");
  return o;
};

// Helper function — sum of multiples
let sumOfMultiples = (factors, list) => {
  let sum = 0;
  for (let num of list) {
    for (let f of factors) {
      if (num % f === 0) {
        sum += num;
        break;
      }
    }
  }
  return sum;
};


// Corrupt detector — stops on first bad input
let eulerCorrupt = (inputStr) => {
  try {
    let parts = inputStr.split(":");
    if (parts.length !== 2) throw("NaN");

    let factors = parts[0].trim().split(" ").map(parse);
    let multiples = parts[1].trim().split(" ").map(parse);

    // If everything parsed fine, compute normally
    let result = sumOfMultiples(factors, multiples);
    alert(result);
  } catch (err) {
    // Anything fails → corrupt
    alert(`corrupt : ${inputStr}`);
  }
};

window.eulerCorrupt = eulerCorrupt;

