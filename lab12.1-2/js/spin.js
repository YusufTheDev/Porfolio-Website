window.addEventListener("load", function() {
    let spinButton = document.getElementById("spin");

    spinButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default form submit behavior

        // Get the bet amount entered by the user
        let betAmount = parseInt(document.getElementById("betAmount").value);

        // Send AJAX request to spin the wheels and compute payout
        fetch("index.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "spin", bet: betAmount })
        })
        .then(response => response.json())  // Expect a JSON response
        .then(data => {window.addEventListener("load", function() {
    let spinButton = document.getElementById("spin");

    spinButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default form submit behavior

        // Get the bet amount entered by the user
        let betAmount = parseInt(document.getElementById("betAmount").value);

        // Send AJAX request to spin the wheels and compute payout
        fetch("index.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "spin", bet: betAmount })
        })
        .then(response => response.json())  // Expect a JSON response
        .then(data => {
            if (data.error) {
                // If there's an error, display an error message
                document.getElementById("message").innerHTML = data.message;
            } else {
                // Update the slot images based on the spin result
                document.getElementById("slot1").src = `images/${data.fruit1}`;
                document.getElementById("slot2").src = `images/${data.fruit2}`;
                document.getElementById("slot3").src = `images/${data.fruit3}`;
                
                // Display the payout message
                document.getElementById("message").innerHTML = data.message;
                document.getElementById("payout").innerHTML = `Payout: ${data.payout} credits`;
                document.getElementById("credits").innerHTML = `Your credits: ${data.credits}`;
                
                // Check if credits are 0 and end the game if true
                if (data.credits === 0) {
                    document.getElementById("message").innerHTML = "Game Over! You have no more credits.";
                    document.getElementById("payout").innerHTML = `Payout: 0 credits`;
                    document.getElementById("credits").innerHTML = `Your credits: 0`;
                }
            }
        })
        .catch(error => console.error("Error:", error));
    });
});

            if (data.error) {
                // If there's an error, display an error message
                document.getElementById("message").innerHTML = data.message;
            } else {
                // Update the slot images based on the spin result
                document.getElementById("slot1").src = `images/${data.fruit1}`;
                document.getElementById("slot2").src = `images/${data.fruit2}`;
                document.getElementById("slot3").src = `images/${data.fruit3}`;
                
                // Display the payout message
                document.getElementById("message").innerHTML = data.message;
                document.getElementById("payout").innerHTML = `Payout: ${data.payout} credits`;
                document.getElementById("credits").innerHTML = `Your credits: ${data.credits}`;
                
                // If credits are 0, end the game
                if (data.credits ===0) {
                    document.getElementById("message").innerHTML = "Game Over! You have no more credits.";
                    document.getElementById("payout").innerHTML = `Payout: 0 credits`;
                    document.getElementById("credits").innerHTML = `Your credits: 0`;
                }
            }
        })
        .catch(error => console.error("Error:", error));
    });
});
