//write a function to alert if overweight (15kg) baggage

//call it from the page


 //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed

// baggage weight limit
const LIMIT = 23;

let check = () => {
    let weight = parseInt(document.getElementById("weight").value);

    if (isNaN(weight)) {
        alert("Please enter a valid baggage weight.");
        return;
    }

    alert("Checking Baggage weight: " + weight + "kg");

    if (weight > LIMIT) {
        alert("❌ Overweight! Please remove some items.");
        document.getElementById("removed").style.display = "block";
        document.getElementById("remB").style.display = "block";
    } else {
        alert("✅ Baggage weight is OK. You may proceed.");
        document.getElementById("removed").style.display = "none";
        document.getElementById("remB").style.display = "none";
    }
};

let remove = () => {
    let weight = parseInt(document.getElementById("weight").value);
    let toRemove = parseInt(document.getElementById("removed").value);

    if (isNaN(toRemove) || toRemove <= 0) {
        alert("Enter a valid amount to remove.");
        return;
    }

    let newWeight = weight - toRemove;
    document.getElementById("weight").value = newWeight; // update input

    if (newWeight > LIMIT) {
        alert("Weight reduced to " + newWeight + "kg ❌ Still overweight.");
    } else {
        alert("Weight reduced to " + newWeight + "kg ✅ You may proceed.");
        document.getElementById("removed").style.display = "none";
        document.getElementById("remB").style.display = "none";
    }
};