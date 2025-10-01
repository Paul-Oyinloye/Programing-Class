//write a function to alert if overweight (15kg) baggage

//call it from the page


 //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed

function check() {
            let weight = parseInt(document.getElementById("weight").value);

            if (isNaN(weight)) {
                alert("Please enter a valid number for baggage weight.");
            } else if (weight <= 25) {
                alert("Baggage weight is " + weight + "kg is Allowed.");
            } else {
                alert("Baggage weight is " + weight + "kg is Overweight!");
            }
        }
      