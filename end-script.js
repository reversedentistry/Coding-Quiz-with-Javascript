var finalScoreDisplay = document.querySelector("#score-display"); 
var submitBtn = document.querySelector("#submit-score"); 

function init() {
    var mostRecentScore = localStorage.getItem("finalscore"); 
    finalScoreDisplay.textContent = "You scored " + mostRecentScore + " points!"
}

init(); 