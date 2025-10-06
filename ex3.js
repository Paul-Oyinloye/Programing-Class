//chatgpt was used to formulate some codes and to understand the exercise
// Function 1: sum of multiples of a or b in list l
let listEuler1 = (a, b, l) => {
  let sum = 0;
  for (let num of l) {
    if (num % a === 0 || num % b === 0) {
      sum += num;
    }
  }
  return sum;
};

// Function 2: sum of multiples of elements in list a (a has 2 elements)
let listEuler2 = (a, l) => {
  let sum = 0;
  for (let num of l) {
    for (let div of a) {
      if (num % div === 0) {
        sum += num;
        break; // avoided counting the same number twice
      }
    }
  }
  return sum;
};

// Function 3: same as above but list a may be any length
let listEuler3 = (a, l) => {
  let sum = 0;
  for (let num of l) {
    for (let div of a) {
      if (num % div === 0) {
        sum += num;
        break;
      }
    }
  }
  return sum;
};

// Button 1 — using a, b, and l
let eulerlist = () => {
  let a = parseInt(document.getElementById("a1").value);
  let b = parseInt(document.getElementById("b1").value);
  let l = document.getElementById("l").value.split(" ").map((x) => parseInt(x));

  if (isNaN(a) || isNaN(b) || l.some(isNaN)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result = listEuler1(a, b, l);
  alert(`Sum of multiples of ${a} or ${b} in list is: ${result}`);
};

// Button 2 — list a has 2 elements
let euler2Lists = () => {
  let a = document.getElementById("aList").value.split(" ").map((x) => parseInt(x));
  let l = document.getElementById("mList").value.split(" ").map((x) => parseInt(x));

  if (a.some(isNaN) || l.some(isNaN)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result = listEuler2(a, l);
  alert(`Sum of multiples of elements in list a (length 2) is: ${result}`);
};

// Button 3 — list a may have any length
let euler2Lists1 = () => {
  let a = document
    .getElementById("aList2")
    .value.split(" ")
    .map((x) => parseInt(x));
  let l = document
    .getElementById("mList2")
    .value.split(" ")
    .map((x) => parseInt(x));

  if (a.some(isNaN) || l.some(isNaN)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result = listEuler3(a, l);
  alert(`Sum of multiples of elements in list a (any length) is: ${result}`);
};