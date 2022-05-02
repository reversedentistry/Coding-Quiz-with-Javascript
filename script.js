// Declare variables for elements needed
var startBtn = document.querySelector("#start");
var startContainer = document.querySelector(".start-container") 
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question"); 
var answerElement = document.querySelector("#answerBtns"); 
var timerElement = document.querySelector("#timer"); 

// Declare empty variables used for functions later 
var questionCounter; 
var quizScore; 
var timeLeft; 

const maxQuestions = 4; 

// Enables click event for start button 
startBtn.addEventListener("click", startGame); 

// Once start is clicked, start button disappears, timer begins, and question from array is chosen and populated as replacement
function startGame() {
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide"); 
    questionCounter = 0; 
    quizScore = 0; 
    timeLeft = 90; 
    let timerInterval = setInterval(function() {
        timeLeft--; 
        timerElement.textContent = "Timer: " + timeLeft + " second(s) left";
        if (timeLeft === 0){
            clearInterval(timerInterval); 
            localStorage.setItem("finalscore", quizScore); 
            // When the timer hits zero, the game ends and the page redirects to endgame page for submissions and score recording
            return window.location.assign("./end.html");    
        }
    }, 1000); 
     
    nextQuestion();
};

// When next question is being populated, any possible previous question will disappear and be replaced. Question count will increase with each new question and acts as indication for which index to move to in array below. 
function nextQuestion() {
    reset(); 
    questionCounter++
     if (questionCounter > maxQuestions) {
        localStorage.setItem("finalscore", quizScore);
        // When the timer hits zero, the game ends and the page redirects to endgame page for submissions and score recording 
        return window.location.assign("./end.html"); 
    }
    showQuestion(questions[questionCounter]); 
};

// Checks to see if the container holding answer buttons has anything. If yes, those old buttons are deleted so new answers can be put in. 
function reset() {
    while(answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

// Checks within the giant question array to see which question to display. 
function showQuestion(question) {
    questionElement.innerText = question.question; 
    question.answers.forEach(function populateAnswers(answer){
        const btn = document.createElement("button"); 
        btn.innerText = answer.answer; 
        btn.classList.add("answer-button") 
        if (answer.correct){
             btn.dataset.correct = answer.correct; 
         }
        btn.addEventListener("click", pickAnswer); 
        answerElement.appendChild(btn); 
    })
    }

// when selecting an answer - moves to next question + gives some indication for whether it is right or wrong + adjust score 
function pickAnswer(event){
    const selectedBtn = event.target; 
    const correctAnswer = selectedBtn.dataset.correct;   
    Array.from(answerElement.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    if (correctAnswer) {
        quizScore += 5; 
    } else {
        timeLeft -= 10; 
    }
    console.log(quizScore); 
    
    setTimeout(nextQuestion, 700); 
}

//Checks to see whether the specified element--in the case above the buttons--are classified as "correct". If they are, set the correct answers to green. If wrong, sets them to red. 
function setStatus(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add("btn-correct"); 
        
    } else {
        element.classList.add("btn-incorrect"); 
        
    }
    
}
// Ensures the colors for right and wrong answers to do not carry over to the next answer set 
function clearStatus(element) {
    element.classList.remove("btn-correct"); 
    element.classList.remove("btn-incorrect"); 
}

// Array containing questions
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