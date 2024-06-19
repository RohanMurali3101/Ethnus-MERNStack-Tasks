function reverseString() {
    // Get the value from the input field
    let inputString = document.getElementById('stringInput').value;

    // Reverse the string
    let reversedString = inputString.split('').reverse().join('');

    // Display the result
    document.getElementById('result').innerText = "Reversed String: " + reversedString;
}
