var highScoreList = document.querySelector("#highscore-list"); 
var highScores = JSON.parse(localStorage.getItem("highScores")) || []; 

highScoreList.innerHTML = highScores.map(function displayScore(score){
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join(""); 