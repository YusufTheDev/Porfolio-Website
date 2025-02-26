window.addEventListener("load", function(event) {
    class GuessingGame {
        constructor(savedGame = null) {
            if (savedGame) {
                this.secretNumber = savedGame.secretNumber;
                this.attempts = savedGame.attempts;
                this.maxAttempts = savedGame.maxAttempts;
                this.lastGuess = savedGame.lastGuess;
                this.feedback = savedGame.feedback;
                this.guesses = savedGame.guesses || []; // Ensure previous guesses are loaded
            } else {
                this.secretNumber = Math.floor(Math.random() * 100 + 1);
                this.attempts = 0;
                this.maxAttempts = 10;
                this.lastGuess = null;
                this.feedback = "";
                this.guesses = []; // Initialize empty guess history
            }
        }
    
        guess(number) {
            this.attempts++;
            this.lastGuess = number;
            this.guesses.push(number); // Store the guess
            
            if (number === this.secretNumber) {
                this.feedback = `Correct! The number was ${this.secretNumber}. You managed to guess it in ${this.attempts} attempts. Starting a new game...`;
                this.saveGame();
                this.render();
                this.reset();
                return;
            } else if (number > this.secretNumber) {
                this.feedback = "Too high! Try again.";
            } else {
                this.feedback = "Too low! Try again.";
            }
    
            if (this.attempts >= this.maxAttempts) {
                this.feedback = `Game over! The number was ${this.secretNumber}. Starting a new game...`;
                this.saveGame();
                this.render();
                this.reset();
                return;
            }
            
            this.saveGame();
            this.render();
        }
    
        reset() {
            this.secretNumber = Math.floor(Math.random() * 100 + 1);
            this.attempts = 0;
            this.guesses = []; // Reset guess history
            this.lastGuess = null;
            this.feedback = "";
            this.saveGame();
        }
    
        saveGame() {
            localStorage.setItem("guessingGame", JSON.stringify(this));
        }
    
        static loadGame() {
            const savedGame = localStorage.getItem("guessingGame");
            return savedGame ? new GuessingGame(JSON.parse(savedGame)) : new GuessingGame();
        }
    
        render() {
            document.getElementById("gameContainer").innerHTML = `
                <h1>Guess the Number Game</h1>
                <p>Guess a number between 1 and 100</p>
                <p>Attempts: ${this.attempts}/${this.maxAttempts}</p>
                <p>Previous Guesses: ${this.guesses.length > 0 ? this.guesses.join(", ") : "None"}</p>
                <p>${this.feedback}</p>
                <form id="guessForm">
                    <input type="number" id="guessInput" min="1" max="100" required>
                    <button type="submit">Guess</button>
                </form>
            `;
            document.getElementById("guessForm").addEventListener("submit", handleGuess);
        }
    }
    
    let game = GuessingGame.loadGame();
    
    document.body.innerHTML = '<div id="gameContainer"></div>';
    game.render();
    
    function handleGuess(event) {
        event.preventDefault();
        let input = document.getElementById("guessInput");
        let guess = parseInt(input.value, 10);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            game.feedback = "Please enter a number between 1 and 100.";
            game.render();
            return;
        }
        
        game.guess(guess);
        input.value = "";
    }
});
