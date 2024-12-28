// Select the required DOM elements
const colorInput = document.querySelector('.colorinput');
const colorCode = document.querySelector('.colorcode');
const quickColorButtons = document.querySelectorAll('.color-selector button');
const resetButton = document.querySelector('.reset');
const container = document.querySelector('.container');

// Function to change the background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    colorCode.value = color; // Update the color code input field
}

// Event Listener for the color input
colorInput.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    changeBackgroundColor(selectedColor);
});

// Event Listener for the color code input
colorCode.addEventListener('input', (event) => {
    const enteredColor = event.target.value;
    if (/^#([A-Fa-f0-9]{6})$/.test(enteredColor)) {
        changeBackgroundColor(enteredColor);
    } else {
        console.error('Invalid color code. Please enter a valid hex code.');
    }
});

// Event Listeners for quick color buttons
quickColorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const color = getComputedStyle(button).backgroundColor;
        changeBackgroundColor(color);
    });
});

// Event Listener for the reset button
resetButton.addEventListener('click', () => {
    changeBackgroundColor('#cecbcb'); // Reset to default background color
});

// Set initial background color (default state)
document.body.style.backgroundColor = '#cecbcb';
