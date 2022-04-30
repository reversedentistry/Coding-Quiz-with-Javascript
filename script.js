var startBtn = document.querySelector("#start"); 
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question"); 
var answerElement = document.querySelector("#answerBtns"); 
var timerElement = document.querySelector("#timer"); 
var questionCounter; 
var quizScore; 
var timeLeft; 

const maxQuestions = 4; 

startBtn.addEventListener("click", startGame); 

function startGame() {
    startBtn.setAttribute("style", "display: none;");
    questionContainer.setAttribute("style", "display: block"); 
    questionCounter = 0; 
    quizScore = 0; 
    timeLeft = 90; 
    let timerInterval = setInterval(function() {
        timeLeft--; 
        if (timeLeft === 0){
            clearInterval(timerInterval); 
            localStorage.setItem("finalscore", quizScore); 
            return window.location.assign("./end.html");    
        }
    }, 1000); 
    timerElement.textContent = "Timer: " + timeLeft + " seconds"; 
    nextQuestion();
};

function nextQuestion() {
    // How do I move sequentially through my array? 
    // set counter, calls showQuestion takes in a question object
    reset(); 
    questionCounter++
     if (questionCounter > maxQuestions) {
        localStorage.setItem("finalscore", quizScore); 
        return window.location.assign("./end.html"); 
    }
    showQuestion(questions[questionCounter]); 
    // check if you've reached the end of the array to go to final page to prevent loop. final question should go to final page to enter initials and see final score 

   
    
    /* if questionCounter > maxQuestions end game and go to end game page*/
};

function reset() {
    while(answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function showQuestion(question) {
    //logic to display question and answers
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
        quizScore += 10; 
    } else {
        timeLeft -= 5; 
    }
    console.log(quizScore); 
    
    setTimeout(nextQuestion, 700); 
}

function setStatus(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add("btn-correct"); 
        
    } else {
        element.classList.add("btn-incorrect"); 
        
    }
    
}

function clearStatus(element) {
    element.classList.remove("btn-correct"); 
    element.classList.remove("btn-incorrect"); 
}

//on answer button click check to see if it is correct or not, then increment score. after checking increment questionCounter by 1
// call nextQuestion

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