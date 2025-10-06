///////Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input : 
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output : 
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page

let SumofMultiples = (a, l) => {
    let sum = 0;
    for (let num of 1) {
        for (let f of a){
            if (num % f == 0) {
                sum += num;
                break;
            }
        }
    }
    return sum;
};

let  eulerstring = (inputstr)  => {
    let parts = inputstr.split(":");
    if  (parts.length !== 2) return "Invalid Input format!";


let factors = parts[0].trim().split(" ").map(Number);
let multiples = parts[1].trim().split(" ").map(Number);

if (factors.some(isNaN)  || multiples.sum(isNaN))
    return "invalid number format!";

let result = SumofMultiples(factors, multiples);

return `${result} : ${factors.join(" ")} : ${multiples.join(" ")}`;
};

let euler4 = () => {
  let inputStr = document.getElementById("inputStr").value;
  let output = eulerString(inputStr);
  document.getElementById("result").innerText = output;
};

