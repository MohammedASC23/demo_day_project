const questions = [
    {
        question: "You receive an email asking for your credit card information to claim a prize. What should you do?",
        options: [
            "Provide the information to claim the prize.",
            "Ignore the email.",
            "Ask your friends for advice.",
            "Click on any links in the email."
        ],
        correctAnswer: 1,
        explanation: "You should ignore the email as it's likely a phishing scam."
    },
    {
        question: "A website offers a deal that's too good to be true. What's the best action?",
        options: [
            "Immediately make a purchase.",
            "Investigate the website and its reputation.",
            "Share the deal with friends before it's gone.",
            "Enter your personal information for more offers."
        ],
        correctAnswer: 1,
        explanation: "You should investigate the website and its reputation before making any purchases."
    },
    {
        question: "You receive a call claiming you owe money to the government and need to pay immediately. What should you do?",
        options: [
            "Provide your bank details over the phone.",
            "Hang up and call the official government agency to verify.",
            "Ask the caller for their personal information.",
            "Yell at the caller for attempting a scam."
        ],
        correctAnswer: 1,
        explanation: "Hang up and call the official government agency to verify the claim."
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");

function loadQuestion(question) {
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(optionButton);
    });
}

function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(questions[currentQuestionIndex]);
    } else {
        showSummary();
    }
}

function showSummary() {
    if (correctAnswers === questions.length) {
        questionElement.innerHTML = `<img src="images/celebrate.jpeg" alt="Celebration" width="200"><br>All questions answered correctly! Great job!`;
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
    } else {
        questionElement.textContent = `Quiz completed! You got ${correctAnswers} out of ${questions.length} questions correct.`;
        optionsElement.innerHTML = "";
        nextButton.textContent = "Retake Quiz";
        nextButton.addEventListener("click", () => {
            currentQuestionIndex = 0;
            correctAnswers = 0;
            loadQuestion(questions[currentQuestionIndex]);
            nextButton.textContent = "Next";
            nextButton.style.display = "block";
        });
    }
}

loadQuestion(questions[currentQuestionIndex]);