var finalScoreDisplay = document.querySelector("#score-display"); 
var playerName = document.querySelector("#player-name"); 
var submitBtn = document.querySelector("#submit-score"); 
var mostRecentScore = localStorage.getItem("finalscore");

// This pulls either an existing array from local storage or, if none exist, creates an empty array
var highScores = JSON.parse(localStorage.getItem("highScores")) || []; 

function init() {
    finalScoreDisplay.textContent = "You scored " + mostRecentScore + "/20 points!"
}

init(); 

// Ensures that submit button will only function if a key entry has been detected
playerName.addEventListener("keyup", function ensureEntry() {
    submitBtn.disabled = !playerName.value
}); 

submitBtn.addEventListener("click", function saveScore(event) {
    event.preventDefault(); 
    var playerInfo = {
        score: mostRecentScore,
        name: playerName.value
    }
// Pushes the object into the array created above
    highScores.push(playerInfo);
// Sorts the contents of the array from highest score to lowest     
    highScores.sort(function(a,b) {
        return b.score - a.score
    }); 
    console.log(highScores); 
// Truncates the array to only 5 entries when too many entries are logged - useful for leaderboard later    
    highScores.splice(5); 

    localStorage.setItem("highScores", JSON.stringify(highScores)); 
    window.location.assign("./index.html"); 
}); 

