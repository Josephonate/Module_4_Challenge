// For my psuedo code I need to make a function to display my questions.
// I will also need a listner to start a countdown timer when I begin the quiz.
// then I will need a function to verify answers given are correct and if they are wrong then I need to take time away from the player.
// at the end of the quiz I then need to display the score and a box for the player to input their name.

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "<scripting>", correct: true},
            {text: "<script>", correct: false},
            {text: "<javascript>", correct: false},
            {text: "<js>", correct: false},
        ]
    }
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?" 
        "<p id="demo">This is a demonstration.</p>",

        answers: [
            {text: "#demo.innerHTML = ""Hello World!"";", correct: false},
            {text: "document.getElementById("demo").innerHTML = ""Hello World!"";", correct: true},
            {text: "document.getElement("p").innerHTML = ""Hello World!"";", correct: false},
            {text: "document.getElementByName("p").innerHTML = ""Hello World!"";", correct: false},
        ]
    }
    {
        question: "How do you write ""Hello World"" in an alert box?",
        answers: [
            {text: "alert(""Hello World"")", correct: true},
            {text: "alerBox(""Hello World"");", correct: false},
            {text: "msg(""Hello World"");", correct: false},
            {text: "msgBox9(""Hello World"");", correct: false},
        ]
    }
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text: "if i==5 then", correct: false},
            {text: "if (i==5)", correct: true},
            {text: "if i=5 then", correct: false},
            {text: "if i=5", correct: false},
        ]
    }
    {
        question: "How does a FOR loop start?",
        answers: [
            {text: "for (i=0;i<=5;i++)", correct: true},
            {text: "for (i=0;i<=5)", correct: false},
            {text: "for i= 1 to 5", correct: false},
            {text: "for (i<=5;i++", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion
    question;
}