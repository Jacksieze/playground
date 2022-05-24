let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");


function computerPlay() {
    const selection = ["rock", "paper", "scissor"];
    const randomSelect = Math.floor(Math.random()*3);
    return selection[randomSelect];
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function win(userPlay, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = `${capitalize(userPlay)} beats ${capitalize(computer)}. You Win!`;
    const userPlay_div = document.getElementById(userPlay);
    userPlay_div.classList.add('green-glow');
    setTimeout(() => userPlay_div.classList.remove('green-glow'), 500);
} 


function lose(userPlay, computer) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = `${capitalize(userPlay)} loses to ${capitalize(computer)}. You Lost..`;
    const userPlay_div = document.getElementById(userPlay);
    userPlay_div.classList.add('red-glow');
    setTimeout(function() {userPlay_div.classList.remove('red-glow')}, 500);
}

function draw(userPlay, computer) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    result.innerHTML = `${capitalize(userPlay)}${smallUserWord} equals ${capitalize(computer)}${smallCompWord}. DRAWWWW~`;
    const userPlay_div = document.getElementById(userPlay);
    userPlay_div.classList.add('gray-glow');
    setTimeout(function() {userPlay_div.classList.remove('gray-glow')}, 500);
}

function game(userPlay) {
    const computer = computerPlay();
    switch (userPlay + computer) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userPlay, computer);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userPlay, computer);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userPlay, computer);
            break;
    }
}


function main() {
    rock.addEventListener('click', () => game("rock"));
    paper.addEventListener('click', () => game("paper"));
    scissor.addEventListener('click', function() {
        game("scissor");
    })
}

main();
