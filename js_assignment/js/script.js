/* 
Yusuf Khan 400565596
Feb 25, 2025
Javascript code for Javascript Assignment, including the main class
*/

window.addEventListener("load", function (event) {
    class CardDeck {
        constructor() {
            this.cards = [
                { name: "2", suit: "Diamonds", value: 2, img: "images/cardimages/2D.png" },
                { name: "3", suit: "Diamonds", value: 3, img: "images/cardimages/3D.png" },
                { name: "4", suit: "Diamonds", value: 4, img: "images/cardimages/4D.png" },
                { name: "5", suit: "Diamonds", value: 5, img: "images/cardimages/5D.png" },
                { name: "6", suit: "Diamonds", value: 6, img: "images/cardimages/6D.png" },
                { name: "7", suit: "Diamonds", value: 7, img: "images/cardimages/7D.png" },
                { name: "8", suit: "Diamonds", value: 8, img: "images/cardimages/8D.png" },
                { name: "9", suit: "Diamonds", value: 9, img: "images/cardimages/9D.png" },
                { name: "10", suit: "Diamonds", value: 10, img: "images/cardimages/10D.png" },
                { name: "Jack", suit: "Diamonds", value: 11, img: "images/cardimages/JD.png" },
                { name: "Queen", suit: "Diamonds", value: 12, img: "images/cardimages/QD.png" },
                { name: "King", suit: "Diamonds", value: 13, img: "images/cardimages/KD.png" },
                { name: "Ace", suit: "Diamonds", value: 14, img: "images/cardimages/AD.png" },

                { name: "2", suit: "Hearts", value: 2, img: "images/cardimages/2H.png" },
                { name: "3", suit: "Hearts", value: 3, img: "images/cardimages/3H.png" },
                { name: "4", suit: "Hearts", value: 4, img: "images/cardimages/4H.png" },
                { name: "5", suit: "Hearts", value: 5, img: "images/cardimages/5H.png" },
                { name: "6", suit: "Hearts", value: 6, img: "images/cardimages/6H.png" },
                { name: "7", suit: "Hearts", value: 7, img: "images/cardimages/7H.png" },
                { name: "8", suit: "Hearts", value: 8, img: "images/cardimages/8H.png" },
                { name: "9", suit: "Hearts", value: 9, img: "images/cardimages/9H.png" },
                { name: "10", suit: "Hearts", value: 10, img: "images/cardimages/10H.png" },
                { name: "Jack", suit: "Hearts", value: 11, img: "images/cardimages/JH.png" },
                { name: "Queen", suit: "Hearts", value: 12, img: "images/cardimages/QH.png" },
                { name: "King", suit: "Hearts", value: 13, img: "images/cardimages/KH.png" },
                { name: "Ace", suit: "Hearts", value: 14, img: "images/cardimages/AH.png" },

                { name: "2", suit: "Clubs", value: 2, img: "images/cardimages/2C.png" },
                { name: "3", suit: "Clubs", value: 3, img: "images/cardimages/3C.png" },
                { name: "4", suit: "Clubs", value: 4, img: "images/cardimages/4C.png" },
                { name: "5", suit: "Clubs", value: 5, img: "images/cardimages/5C.png" },
                { name: "6", suit: "Clubs", value: 6, img: "images/cardimages/6C.png" },
                { name: "7", suit: "Clubs", value: 7, img: "images/cardimages/7C.png" },
                { name: "8", suit: "Clubs", value: 8, img: "images/cardimages/8C.png" },
                { name: "9", suit: "Clubs", value: 9, img: "images/cardimages/9C.png" },
                { name: "10", suit: "Clubs", value: 10, img: "images/cardimages/10C.png" },
                { name: "Jack", suit: "Clubs", value: 11, img: "images/cardimages/JC.png" },
                { name: "Queen", suit: "Clubs", value: 12, img: "images/cardimages/QC.png" },
                { name: "King", suit: "Clubs", value: 13, img: "images/cardimages/KC.png" },
                { name: "Ace", suit: "Clubs", value: 14, img: "images/cardimages/AC.png" },

                { name: "2", suit: "Spades", value: 2, img: "images/cardimages/2S.png" },
                { name: "3", suit: "Spades", value: 3, img: "images/cardimages/3S.png" },
                { name: "4", suit: "Spades", value: 4, img: "images/cardimages/4S.png" },
                { name: "5", suit: "Spades", value: 5, img: "images/cardimages/5S.png" },
                { name: "6", suit: "Spades", value: 6, img: "images/cardimages/6S.png" },
                { name: "7", suit: "Spades", value: 7, img: "images/cardimages/7S.png" },
                { name: "8", suit: "Spades", value: 8, img: "images/cardimages/8S.png" },
                { name: "9", suit: "Spades", value: 9, img: "images/cardimages/9S.png" },
                { name: "10", suit: "Spades", value: 10, img: "images/cardimages/10S.png" },
                { name: "Jack", suit: "Spades", value: 11, img: "images/cardimages/JS.png" },
                { name: "Queen", suit: "Spades", value: 12, img: "images/cardimages/QS.png" },
                { name: "King", suit: "Spades", value: 13, img: "images/cardimages/KS.png" },
                { name: "Ace", suit: "Spades", value: 14, img: "images/cardimages/AS.png" }
            ];
        }

        shuffle() {
            this.cards.sort(() => Math.random() - 0.5);
        }

        getDecks() {
            this.shuffle(); // Shuffle the cards first
            const playerDeck = this.cards.slice(0, 26); // First half for player
            const computerDeck = this.cards.slice(26); // Second half for computer
            return { playerDeck, computerDeck };
        }
    }

    //initialize input values with localStorage or default values if no localStorage
    let playerName = localStorage.getItem("playerName") || "Player";
    let playerAge = localStorage.getItem("playerAge") || "";
    let color1Hex = localStorage.getItem("color1Hex") || "#000000";
    let color2Hex = localStorage.getItem("color2Hex") || "#87CEFA";

    document.getElementById("player-name").value = playerName;
    document.getElementById("player-age").value = playerAge;
    document.getElementById("player-color-1").value = color1Hex;
    document.getElementById("player-color-2").value = color2Hex;



    // Retrieve overall score from localStorage or initialize if not available
    let playerWins = parseInt(localStorage.getItem("playerWins")) || 0;
    let computerWins = parseInt(localStorage.getItem("computerWins")) || 0;

    // Update leaderboard display on home page
    document.getElementById("player-record").textContent = `${playerName} Wins: ${playerWins}`;
    document.getElementById("computer-record").textContent = `Computer Wins: ${computerWins}`;


    //global variables
    let playerScore = 0;
    let computerScore = 0;
    let canDrawCard = true;
    let tie = false;
    let playerDeck = [];
    let computerDeck = [];
    let counter = 0;

    //tracking event listeners for each input value to update localStorage
    document.getElementById("player-name").addEventListener("input", () => {
        playerName = document.getElementById("player-name").value;
        localStorage.setItem("playerName", playerName);
    });

    document.getElementById("player-age").addEventListener("input", () => {
        playerAge = document.getElementById("player-age").value;
        localStorage.setItem("playerAge", playerAge);
    });

    document.getElementById("player-color-1").addEventListener("input", () => {
        color1Hex = document.getElementById("player-color-1").value;
        localStorage.setItem("color1Hex", color1Hex);
    });

    document.getElementById("player-color-2").addEventListener("input", () => {
        color2Hex = document.getElementById("player-color-2").value;
        localStorage.setItem("color2Hex", color2Hex);
    });

    //event listeners for buttons and submition of the starting form
    document.getElementById("player-form").addEventListener("submit", startGame);
    document.getElementById("play-again").addEventListener("click", function () {
        quit();
        startGame(event);
    });
    document.getElementById("quit").addEventListener("click", quit);
    document.getElementById("help-button").addEventListener("click", showInstructions);

    function updateScore() {
        let playerScoreParagraph = document.createElement("h1");
        playerScoreParagraph.textContent = playerScore;
        document.getElementById("player-score").textContent = "";
        document.getElementById("player-score").appendChild(playerScoreParagraph);

        let computerScoreParagraph = document.createElement("h1");
        computerScoreParagraph.textContent = computerScore;
        document.getElementById("computer-score").textContent = "";
        document.getElementById("computer-score").appendChild(computerScoreParagraph);
    }

    function updateResults(playerCard, computerCard) {
        document.getElementById("computer-results").innerHTML = "The Enemy drew a: " + computerCard.name + " of " + computerCard.suit + "!";
        document.getElementById("player-results").innerHTML = "You drew a: " + playerCard.name + " of " + playerCard.suit + "!";
        if (!tie) {
            document.getElementById("computer-draw").style.display = "flex";
            document.getElementById("player-draw").style.display = "flex";
            document.getElementById("computer-draw-card").style.display = "flex";
            document.getElementById("computer-draw-card").src = computerCard.img;
            document.getElementById("player-draw-card").style.display = "flex";
            document.getElementById("player-draw-card").src = playerCard.img;
        }
    }

    function startGame(event) {
        event.preventDefault();
        let playerName = document.getElementById('player-name').value;
        let playerAge = document.getElementById('player-age').value;
        let playerColor1 = document.getElementById('player-color-1').value;
        let playerColor2 = document.getElementById('player-color-2').value;

        //visually set up for game start
        if (playerName && playerAge && playerColor1 && playerColor2) {
            document.getElementById('intro-page').style.display = 'none';
            document.getElementById('play-again').style.display = 'none';
            document.getElementById('game-page').style.display = 'block';
            document.getElementById('welcome-message').textContent = `Welcome, ${playerName}! Let's get to war!`;
            document.getElementById('game-content').style.color = playerColor1;
            document.getElementById('game-content').style.backgroundColor = playerColor2;
            document.getElementById("computer-draw-card").style.display = "none";
            document.getElementById("player-draw-card").style.display = "none";
        }

        playerScore = 0;
        computerScore = 0;
        let gameDeck = new CardDeck();
        ({ playerDeck, computerDeck } = gameDeck.getDecks()); // Assign to global variables
        canDrawCard = true;

        updateScore();

        // Remove any previous event listeners
        let drawButton = document.getElementById("draw-card");
        let newDrawButton = drawButton.cloneNode(true); // Create a clean button without event listeners
        drawButton.parentNode.replaceChild(newDrawButton, drawButton); // Replace the old button with the new one

        // Add event listener to the new button
        newDrawButton.addEventListener("click", function () {
            if (canDrawCard) {
                drawCard();
            }
        });
    }

    function showInstructions() {
        let instructions = document.getElementById('instructions');
        if (instructions.style.display === 'none') {
            instructions.style.display = 'block';
        } else {
            instructions.style.display = 'none';
        }
    }

    function drawCard() {
        canDrawCard = false;

        //reset format for after a draw
        function resetDrawFormat() {
            document.getElementById("welcome-message").style.display = "none";
            document.getElementById("computer-draw-choices").style.display = "none";
            document.getElementById("player-draw-choices").style.display = "none";
            document.getElementById("computer-draw").style.display = "flex";
            document.getElementById("player-draw").style.display = "flex";
            document.getElementById("info-text").innerHTML = ""; // Clear tie text
            document.getElementById("computer-choice-1").src = "images/enemytiecard.png"
            document.getElementById("computer-choice-2").src = "images/enemytiecard.png"
            document.getElementById("computer-choice-3").src = "images/enemytiecard.png"
            document.getElementById("player-choice-1").src = "images/playertiecard.png"
            document.getElementById("player-choice-2").src = "images/playertiecard.png"
            document.getElementById("player-choice-3").src = "images/playertiecard.png"

        }

        resetDrawFormat();
        tie = false;
        let playerCard = playerDeck[0];
        let computerCard = computerDeck[0];
        let chosen1;
        let chosen2;
        let chosen3;

        counter++;

        //card logic based on who scored higher with each draw
        if (playerCard.value > computerCard.value) {
            playerScore += 1;
            playerDeck = playerDeck.slice(1);
            computerDeck = computerDeck.slice(1);
            updateResults(playerCard, computerCard);
            updateScore();
            canDrawCard = true;
        } else if (computerCard.value > playerCard.value) {
            computerScore += 1;
            playerDeck = playerDeck.slice(1);
            computerDeck = computerDeck.slice(1);
            updateResults(playerCard, computerCard);
            updateScore();
            canDrawCard = true;
        } else {
            document.getElementById("computer-draw-card").src = computerCard.img;
            document.getElementById("player-draw-card").src = playerCard.img;
            document.getElementById("computer-results").innerHTML = "";
            document.getElementById("player-results").innerHTML = "";
            document.getElementById("info-text").innerHTML = "You both rolled a " + playerCard.name + " and tied! <br> Choose one of the following 3 cards to win the round!";
            document.getElementById("computer-draw-choices").style.display = "flex";
            document.getElementById("player-draw-choices").style.display = "flex";

            playerDeck = playerDeck.slice(1);
            computerDeck = computerDeck.slice(1);

            let d = document.querySelectorAll(".draw");
            d.forEach(element => {
                element.style.display = "none";
            });

            let chosen;
            let computerChosen = Math.floor(Math.random() * 3);

            chosen1 = () => {
                chosen = 0;
                proceedWithTieBreaker(chosen, computerChosen);
            }

            chosen2 = () => {
                chosen = 1;
                proceedWithTieBreaker(chosen, computerChosen);
            }

            chosen3 = () => {
                chosen = 2;
                proceedWithTieBreaker(chosen, computerChosen);
            }

            //allows user to click the card to choose one of the 3
            document.getElementById("player-choice-1").addEventListener("click", chosen1);

            document.getElementById("player-choice-2").addEventListener("click", chosen2);

            document.getElementById("player-choice-3").addEventListener("click", chosen3);
        }

        //check for when players run out of cards
        if (playerDeck.length === 0 || computerDeck.length === 0) {
            canDrawCard = false;
            document.getElementById('play-again').style.display = "block";
            document.getElementById("info-text").innerHTML = "Game Over! Both players have run out of cards.";
            if (playerScore > computerScore) {
                document.getElementById("info-text").innerHTML +=
                    "<br>Since you had " + playerScore + " points while your enemy only had " + computerScore + " points, you won this game!";
                playerWins++;
                localStorage.setItem("playerWins", playerWins);
            }

            else if (computerScore > playerScore) {
                document.getElementById("info-text").innerHTML +=
                    "<br>Since you only had " + playerScore + " points while your enemy had " + computerScore + " points, you lost this game!";
                computerWins++;
                localStorage.setItem("computerWins", computerWins);
            }

            else {
                document.getElementById("info-text").innerHTML +=
                    "<br>Since both you and your enemy had " + playerScore + " points, this game was a tie!";
            }

            return;
        }

        function proceedWithTieBreaker(chosen, computerChosen) {
            tie = true;
            document.getElementById("info-text").innerHTML = "";

            document.getElementById("player-choice-1").removeEventListener("click", chosen1);

            document.getElementById("player-choice-2").removeEventListener("click", chosen2);

            document.getElementById("player-choice-3").removeEventListener("click", chosen3);

            if (playerDeck.length >= 4 && computerDeck.length >= 4) {
                // Update the player's chosen card image
                document.getElementById("player-choice-" + (chosen + 1)).src = playerDeck[chosen].img;
                document.getElementById("player-choice-" + (chosen + 1)).style.display = "flex";

                // Update the computer's chosen card image
                document.getElementById("computer-choice-" + (computerChosen + 1)).src = computerDeck[computerChosen].img;
                document.getElementById("computer-choice-" + (computerChosen + 1)).style.display = "flex";

                // Compare the selected cards
                if (playerDeck[chosen].value > computerDeck[computerChosen].value) {
                    playerScore += 4;
                    updateResults(playerDeck[chosen], computerDeck[computerChosen]);
                    updateScore();
                    playerDeck = playerDeck.slice(3);
                    computerDeck = computerDeck.slice(3);
                } else if (computerDeck[computerChosen].value > playerDeck[chosen].value) {
                    computerScore += 4;
                    updateResults(playerDeck[chosen], computerDeck[computerChosen]);
                    updateScore();
                    playerDeck = playerDeck.slice(3);
                    computerDeck = computerDeck.slice(3);
                } else {
                    document.getElementById("info-text").innerHTML = "You both rolled a " + playerDeck[chosen].name + " and tied! No points will be awarded and the round is over!";
                    playerDeck = playerDeck.slice(3);
                    computerDeck = computerDeck.slice(3);
                }

                canDrawCard = true;
            } else {
                document.getElementById("info-text").innerHTML = "Not enough cards for a tie-breaker! The round is over with no points awarded.";
                resetDrawFormat();
                canDrawCard = true;
            }
        }

    }

    function quit() {
        document.getElementById('intro-page').style.display = 'block';
        document.getElementById('game-page').style.display = 'none';
        document.getElementById("computer-results").innerHTML = "";
        document.getElementById("player-results").innerHTML = "";
        document.getElementById("info-text").innerHTML = "";

        document.getElementById("player-record").textContent = `${playerName} Wins: ${playerWins}`;
        document.getElementById("computer-record").textContent = `Computer Wins: ${computerWins}`;
    }
})

