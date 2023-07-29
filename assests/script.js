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

        ans_a: "<scripting>", correct: true,
        ans_b: "<script>", correct: false,
        ans_c: "<javascript>", correct: false,
        ans_d: "<js>", correct: false,

    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",


        ans_a: "onchange", correct: false,
        ans_b: "onmouseover", correct: false,
        ans_c: "onmouseclick", correct: false,
        ans_d: "onclick", correct: true,

    },
    {
        question: "Which operator is used to assign a value to a variable",

        ans_a: "=", correct: true,
        ans_b: "X", correct: false,
        ans_c: "*", correct: false,
        ans_d: "-", correct: false,

    },
    {
        question: "How to write an IF statement in JavaScript?",

        ans_a: "if i==5 then", correct: false,
        ans_b: "if (i==5)", correct: true,
        ans_c: "if i=5 then", correct: false,
        ans_d: "if i=5", correct: false,

    },
    {
        question: "How does a FOR loop start?",

        ans_a: "for (i=0;i<=5;i++)", correct: true,
        ans_b: "for (i=0;i<=5)", correct: false,
        ans_c: "for i= 1 to 5", correct: false,
        ans_d: "for (i<=5;i++", correct: false,

    }
]
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const ans_a = document.getElementById("ans_b")
const ans_b = document.getElementById("ans_c")
const ans_c = document.getElementById("ans_d")
const ans_d = document.getElementById("ans_a")
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const highScore = document.getElementById("score-btn");
var questionIndex = 0;

// This function shows my question and answers
function showQuestion() {
    var currentQuestion = questionsArray[questionIndex];

    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("ans_a").textContent = currentQuestion.ans_a;
    document.getElementById("ans_b").textContent = currentQuestion.ans_b;
    document.getElementById("ans_c").textContent = currentQuestion.ans_c;
    document.getElementById("ans_d").textContent = currentQuestion.ans_d;
}
// This function goes to the next set of questions after I push next
function showNextQuestion() {
    questionIndex++
    if (questionIndex < questionsArray.length) {
        showQuestion()
    }
}
showQuestion()
// this is my event listener so that I can hide my start buttons and show my questions.
startButton.addEventListener("click", function () {
    startButton.classList.add("hide");
    highScore.classList.add("hide");
    answerButton.classList.remove("hide");
    nextButton.classList.remove("hide");
    questionElement.classList.remove("hide");
})

function verifyAnswer() {

    if (ans_a && correct === true) {
        document.getElementById("ans_a").style.color = "green";
    } else {
        document.getElementById("ans_a").style.color = "red";
    }
}
verifyAnswer()