// For my psuedo code I need a question and answer bank I need to make a function to start my quiz 
// after pushing start the button will hide and display my questions.
// I will also need a listner to start a countdown timer when I begin the quiz.
// Then I will need a function to verify answers given are correct and if they are wrong then I need to take time away from the player.
// At the end of the quiz I then need to display the score and a box for the player to input their name 
// This will save the players scores for later viewing.

const questionsArray = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "answers": [
            { text: "<scripting>", correct: true },
            { text: "<script>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: false },
        ]
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",

        "answers": [
            { text: "onchange", correct: false },
            { text: "onmouseover", correct: false },
            { text: "onmouseclick", correct: false },
            { text: "onclick", correct: true },
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable",
        answers: [
            { text: "=", correct: true },
            { text: "X", correct: false },
            { text: "*", correct: false },
            { text: "-", correct: false },
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            { text: "if i==5 then", correct: false },
            { text: "if (i==5)", correct: true },
            { text: "if i=5 then", correct: false },
            { text: "if i=5", correct: false },
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            { text: "for (i=0;i<=5;i++)", correct: true },
            { text: "for (i=0;i<=5)", correct: false },
            { text: "for i= 1 to 5", correct: false },
            { text: "for (i<=5;i++", correct: false },
        ]
    }
]
var questionIndex = 0;

function showQuestion(){
    var currentQuestion = questionsArray[questionIndex];

    document.getElementById("question").textContent = currentQuestion.question

}

function showNextQuestion(){
    questionIndex++
    if(questionIndex < questionsArray.length){
        showQuestion()
    }
}
showQuestion()

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const highScore = document.getElementById("score-btn");

startButton.addEventListener("click", function () {
    startButton.classList.add("hide");
    highScore.classList.add("hide");
    answerButton.classList.remove("hide");
    nextButton.classList.remove("hide");
    questionElement.classList.remove("hide");
})

