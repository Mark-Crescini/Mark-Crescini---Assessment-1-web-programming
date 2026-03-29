// Get references to the HTML elements we need
const petrolCostInput = document.getElementById('petrolCost'); // Input for cost per liter
const litersInput = document.getElementById('liters');         // Input for liters purchased
const calculateBtn = document.getElementById('calculateBtn');  // Button to trigger calculation
const totalCostDisplay = document.getElementById('totalCost'); // Paragraph to display result

// Function to calculate total petrol cost
function calculateTotal() {
    // Read values from inputs and convert them to floating point numbers
    const petrolCost = parseFloat(petrolCostInput.value);
    const liters = parseFloat(litersInput.value);

    // Validate inputs: check if they are numbers and non-negative
    if (isNaN(petrolCost) || isNaN(liters) || petrolCost < 0 || liters < 0) {
        totalCostDisplay.textContent = "Please enter valid positive numbers!";
        return; // Stop further execution if input is invalid
    }

    // Calculate total cost
    const totalCost = petrolCost * liters;

    // Update the paragraph with the calculated total, formatted to 2 decimal places
    totalCostDisplay.textContent = `Total Cost: ${totalCost.toFixed(2)} AED`;
}

// Add a click event listener to the button to run the calculation
calculateBtn.addEventListener('click', calculateTotal);