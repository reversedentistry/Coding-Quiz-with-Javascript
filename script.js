var startBtn = document.getElementById("start"); 
var questionContainer = document.getElementById("question-container");

startBtn.addEventListener("click", startGame); 

function startGame() {
    startBtn.setAttribute("style", "display: none;");
    questionContainer.setAttribute("style", "display: block"); 
    nextQuestion()
};

function nextQuestion() {}; 