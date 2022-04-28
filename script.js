var startBtn = document.querySelector("#start"); 
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question"); 
var answerElement = document.querySelector("#answer-button"); 

startBtn.addEventListener("click", startGame); 

function startGame() {
    startBtn.setAttribute("style", "display: none;");
    questionContainer.setAttribute("style", "display: block"); 
    nextQuestion();
};

function nextQuestion() {
    // How do I move sequentially through my array? 
    questions++ 

}; 

const questions = [
   { 
    question: "Commonly used data types do NOT include:", 
    answers: [
        {answer: "strings", correct: false}, 
        {answer: "booleans", correct: false}, 
        {answer: "alerts", correct: true}, 
        {answer: "numbers", correct: false}, 
    ]
   }, 
   {
    question: "The condition within an if/else statement is enclosed within ___", 
    answers: [
        {answer: "quotes", correct: false},  
        {answer: "curly brackets", correct: false},   
        {answer: "square brackets", correct: false}, 
        {answer: "parentheses", correct: true}, 
    ]
    }, 
    {
    question: "Arrays in Javascript can be used to store ____", 
    answers: [
        {answer: "numbers and strings", correct: false}, 
        {answer: "other arrays", correct: false}, 
        {answer: "booleans", correct: false}, 
        {answer: "all of the above", correct: true}, 
    ]
    }, 
    {
    question: "String values must be enclosed within ____ when assigned to a variable.", 
    answers: [
        {answer: "square brackets", correct: false}, 
        {answer: "quotes", correct: true}, 
        {answer: "commas", correct: false}, 
        {answer: "curly brackets", correct: false}, 
    ]
    }, 
    {
    question: "A useful tool during development and debugging for printing content to the debugger is:", 
    answers: [
        {answer: "console log", correct: true}, 
        {answer: "Javascript", correct: false}, 
        {answer: "terminal/bash", correct: false}, 
        {answer: "for loops", correct: false}, 
    ]
    },
] 