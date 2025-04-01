<?php
session_start();

// Check if the session has been started and if credits are set
if (!isset($_SESSION['credits'])) {
    $_SESSION['credits'] = 10;  // Starting credits
}

// Handle AJAX request for spinning the wheels
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Read input from the AJAX request
    $input = json_decode(file_get_contents("php://input"), true);

    // Ensure the action is "spin"
    if (isset($input["action"]) && $input["action"] == "spin") {
        $bet = isset($input['bet']) ? intval($input['bet']) : 0;

        // Error if bet is less than 1 or more than available credits
        if ($bet < 1 || $bet > $_SESSION['credits']) {
            echo json_encode(['error' => true, 'message' => 'Invalid bet amount. Please bet between 1 and your current credits.']);
            exit;
        }

        // Generate random slot values
        $slot1 = rand(1, 6);
        $slot2 = rand(1, 6);
        $slot3 = rand(1, 6);

        // Define payout (for simplicity, we'll say jackpot is 5x bet, partial match is 2x bet)
        $payout = 0;
        $message = "";
        if ($slot1 == $slot2 && $slot2 == $slot3) {
            $payout = 5 * $bet;  // Jackpot
            $message = "🎉 Jackpot! 🎉";
        } elseif ($slot1 == $slot2 || $slot2 == $slot3 || $slot1 == $slot3) {
            $payout = 2 * $bet;  // Partial match
            $message = "✨ Partial Match! ✨";
        } else {
            $message = "❌ Try Again! ❌";
        }

        // Update user's credits
        $_SESSION['credits'] -= $bet;  // Subtract the bet amount
        $_SESSION['credits'] += $payout;  // Add the payout

        // Check if the user has run out of credits
        if ($_SESSION['credits'] <= 0) {
            // End the game if out of credits
            session_destroy();  // Destroy the session
            echo json_encode([
                'error' => false,
                'fruit1' => $slot1 . ".png",
                'fruit2' => $slot2 . ".png",
                'fruit3' => $slot3 . ".png",
                'message' => 'Game Over! You have no more credits.',
                'payout' => 0,
                'credits' => 0
            ]);
            exit;
        }

        // Return the spin result and payout as a JSON response
        echo json_encode([
            'error' => false,
            'fruit1' => $slot1 . ".png",
            'fruit2' => $slot2 . ".png",
            'fruit3' => $slot3 . ".png",
            'message' => $message,
            'payout' => $payout,
            'credits' => $_SESSION['credits']  // Send the updated credits back to the client
        ]);
    }
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Slot Machine PHP</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="slot-machine">
        <div class="slots">
            <img id="slot1" src="images/1.png" alt="Slot 1" />
            <img id="slot2" src="images/2.png" alt="Slot 2" />
            <img id="slot3" src="images/3.png" alt="Slot 3" />
        </div>
        <div id="message" class="message"></div>
        <div id="payout" class="payout"></div>
        <div id="credits" class="credits">Your credits: 10</div>
        <form method="post">
            <input type="number" id="betAmount" name="betAmount" min="1" placeholder="Bet Amount" required>
            <button id="spin" class="button" type="submit">Spin</button>
        </form>
    </div>
    <script src="js/spin.js"></script>
</body>
</html>
