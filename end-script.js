var finalScoreDisplay = document.querySelector("#score-display"); 
var playerName = document.querySelector("#player-name"); 
var submitBtn = document.querySelector("#submit-score"); 
var mostRecentScore = localStorage.getItem("finalscore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || []; 

function init() {
    finalScoreDisplay.textContent = "You scored " + mostRecentScore + " points!"
}

init(); 

playerName.addEventListener("keyup", function ensureEntry() {
    submitBtn.disabled = !playerName.value
}); 

function saveScore(event) {
    event.preventDefault(); 
    var playerInfo = {
        score: mostRecentScore,
        name: playerName.value
    }

    highScores.push(playerInfo);
    
    highScores.sort(function(a,b) {
        return b.score - a.score
    }); 

    highScores.splice(5); 

    localStorage.setItem("highScores", JSON.stringify(highScores)); 
}