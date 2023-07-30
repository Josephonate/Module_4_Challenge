// For my psuedo code I need a question and answer bank I need to make a function to start my quiz 
// after pushing start the button will hide and display my questions.
// I will also need a listner to start a countdown timer when I begin the quiz.
// Then I will need a function to verify answers given are correct and if they are wrong then I need to take time away from the player.
// At the end of the quiz I then need to display the score and a box for the player to input their name 
// This will save the players scores for later viewing.

// This is my question bank
const questionsArray = [
    {
        question: "Inside which HTML element do we put the JavaScript?",

        choices: ["<scripting>", "<script>", "<javascript>", "<js>"],
        correct: "<scripting>"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",

        choices: ["onchange", "onmouseover", "onmouseclick", "onclick",],
        correct: "onclick",
    },
    {
        question: "Which operator is used to assign a value to a variable",

        choices: ["=", "X", "*", "-",],
        correct: "=",
    },
    {
        question: "How to write an IF statement in JavaScript?",

        choices: ["if i==5 then", "if (i==5)", "if i=5 then", "if i=5"],
        correct: "if (i==5)",
    },
    {
        question: "How does a FOR loop start?",

        choices: ["for (i=0;i<=5;i++)", "for (i=0;i<=5)", "for i= 1 to 5", "for (i<=5;i++"],
        correct: "for (i=0;i<=5;i++)",
    }
];

let currentQuestionIndex = 0;
let timeLeft = 60; // Total time for the quiz
let timerInterval;

const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const timerElement = document.getElementById("time-left");
const gameOverElement = document.getElementById("game-over");
const initialsInput = document.getElementById("initials");
const submitScoreButton = document.getElementById("submit-score");
const highScoresElement = document.getElementById("high-scores");
const scoreListElement = document.getElementById("score-list");

function startQuiz() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion();
  startTimer();
}

function showQuestion() {
  if (currentQuestionIndex < questionsArray.length) {
    const question = questionsArray[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    for (const choice of question.choices) {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choiceButton);
    }
  } else {
    endQuiz();
  }
}

function checkAnswer(event) {
  const selectedChoice = event.target.textContent;
  const correctAnswer = questionsArray[currentQuestionIndex].correct;

  if (selectedChoice === correctAnswer) {
    
  } else {
    // logic for incorrect answer (subtract time)
    timeLeft -= 10; // Subtract 10 seconds for an incorrect answer
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }

  currentQuestionIndex++;
  showQuestion();
}

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  gameOverElement.style.display = "block";
}

submitScoreButton.addEventListener("click", function () {
  const initials = initialsInput.value;
  // Store the initials and score in local storage or send them to a server
  // Implement your high score storage logic here.
  // Example of storing in local storage:
  localStorage.setItem(initials, timeLeft);

  // Display high scores
  showHighScores();
});

function showHighScores() {
  // Retrieve scores from local storage and display them
  highScoresElement.style.display = "block";
  gameOverElement.style.display = "none";

  scoreListElement.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const initials = localStorage.key(i);
    const score = localStorage.getItem(initials);
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${initials}: ${score}`;
    scoreListElement.appendChild(scoreItem);
  }
}

startButton.addEventListener("click", startQuiz);