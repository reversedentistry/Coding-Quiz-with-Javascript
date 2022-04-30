var finalScoreDisplay = document.querySelector("#score-display"); 
var playerName = document.querySelector("#player-name"); 
var submitBtn = document.querySelector("#submit-score"); 

function init() {
    var mostRecentScore = localStorage.getItem("finalscore"); 
    finalScoreDisplay.textContent = "You scored " + mostRecentScore + " points!"
}

init(); 

playerName.addEventListener("keyup", function ensureEntry() {
    submitBtn.disabled = !playerName.value
}); 