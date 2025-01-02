// Sample array
let myColor = ["Red", "Green", "White", "Black"];

// Variable to hold the result string
let result = "";

// Loop through the array and join elements
for (let i = 0; i < myColor.length; i++) {
    // Append each element to the result string
    result += myColor[i];

    // Add a comma after each element, except the last one
    if (i < myColor.length - 1) {
        result += ",";
    }
}

// Display the result
console.log(result);
