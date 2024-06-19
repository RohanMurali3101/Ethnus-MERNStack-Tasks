function reverseNumber() {
    // Get the value from the input field
    let number = document.getElementById('numberInput').value;

    // Check if the input is a number
    if (isNaN(number)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    // Convert the number to a string, split it, reverse it, and join it back
    let reversedNumber = number.toString().split('').reverse().join('');

    // Display the result
    document.getElementById('result').innerText = "Reversed Number: " + reversedNumber;
}
