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

window.euler4 = function () {
  var input = document.getElementById('inputStr').value || '';
  var parts = input.split(':');

  if (parts.length !== 2) {
    alert('Invalid input! Use format: factors : multiples (e.g. "3 5 : 1 2 3 4 5 6 7 8 9")');
    return;
  }

  var factorTokens = parts[0].trim().split(/\s+/).filter(Boolean);
  var multipleTokens = parts[1].trim().split(/\s+/).filter(Boolean);

  var factors = factorTokens.map(Number);
  var multiples = multipleTokens.map(Number);

  if (factors.some(isNaN) || multiples.some(isNaN)) {
    alert('Invalid numbers detected. Use only integers separated by spaces.');
    return;
  }

  if (factors.some(f => f === 0)) {
    alert('Factor cannot be zero.');
    return;
  }

  var absFactors = Array.from(new Set(factors.map(Math.abs)));
  var sum = 0;

  for (var i = 0; i < multiples.length; i++) {
    var n = multiples[i];
    for (var j = 0; j < absFactors.length; j++) {
      if (n % absFactors[j] === 0) {
        sum += n;
        break;
      }
    }
  }

  alert(sum); // only alert the solution number
};

