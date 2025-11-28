function checkAnswer() {
    // Store the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption.value;

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Compare the answer and display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
