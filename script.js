const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

let secretNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 5; // You can adjust the number of attempts

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        message.textContent = 'Please enter a valid number between 1 and 50.';
        return;
    }

    attempts--;
    attemptsDisplay.textContent = attempts;

    if (userGuess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${10 - attempts} attempts.`;
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess < secretNumber) {
        message.textContent = 'It is low! Try again.';
    } else {
        message.textContent = 'It is high! Try again.';
    }

    if (attempts === 0) {
        message.textContent = `You ran out of attempts! The number was ${secretNumber}.`;
        guessInput.disabled = true;
        guessButton.disabled = true;
    }

    guessInput.value = ''; // Clear the input field after each guess
    guessInput.focus();
}

guessButton.addEventListener('click', checkGuess);

// Allow submission with Enter key
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Initial display of attempts
attemptsDisplay.textContent = attempts;
