class LotteryBall {
    constructor() {
        this.color = ["red", "white"][Math.floor(Math.random() * 2)];
        this.points = Math.floor(Math.random() * 101);
    }

    displayInfo() {
        alert(`The color of the ball is: ${this.color}. The ball is worth ${this.points} points.`);
    }
}

let balls = [];
for (let i = 0; i < 100; i++) {
    balls[i] = new LotteryBall();
}

let score = 0;
let guesses = [];

function lotteryGame() {
    while (true) {
        let guess = parseInt(prompt("Enter a number from 1 to 100 to pick a ball!")) - 1;

        if (guess < 0 || guess > 99) {
            alert("Your guess was not between 1 and 100, please try again!");
            continue;  
        }

        if (guesses.includes(guess)) {
            alert("You already picked that ball before, please try again!");
            continue;  
        }

        guesses.push(guess);  

        let ball = balls[guess];
        ball.displayInfo();  

        if (ball.color === "white") {
            score += ball.points;  
        } else {
            score -= ball.points;  
            alert("You drew a red ball! Your final score is: " + score);
            break;  
        }

        let continueGame = confirm("Do you want to continue?");
        if (!continueGame) {
            alert("You decided to quit. Your final score is: " + score);
            break;  
        }
    }
}

lotteryGame();  
