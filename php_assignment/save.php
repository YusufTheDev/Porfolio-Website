<?php
//Yusuf Khan 400565596
//April 03, 2025
//Php code to save game results to the database and prompt user to play again
//Also displays the top 10 players by wins
include "connect.php";
echo "<h1>Hunt the Wumpus!</h1>";

// Get and validate user input
$win = filter_input(INPUT_POST, "userstatus", FILTER_VALIDATE_INT);
$name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);

if ($name === NULL || $email === NULL || $win === NULL) {
    echo "<p style='color: red;'>Error: Invalid input data.</p>";
    exit;
}

// Prepare SQL command to check if the email exists
$command = "SELECT email_address, wins, losses FROM players WHERE email_address = ?";
$stmt = $dbh->prepare($command);
$stmt->execute([$email]);
$success = $stmt->fetch(PDO::FETCH_ASSOC);

// Get current date and declare variables
$date = date("Y-m-d H:i:s");

// If email is not in the database, insert a new row
if ($success === false) {
    $wins = ($win == 1) ? 1 : 0;
    $losses = ($win == 1) ? 0 : 1;

    $command = "INSERT INTO players (name, email_address, wins, losses, date_last_played) VALUES (?, ?, ?, ?, ?)";
    $stmt = $dbh->prepare($command);
    $stmt->execute([$name, $email, $wins, $losses, $date]);

    echo "<p>Thanks for playing! Your score has been saved.</p>";
} 
// If email exists, update the record
else {
    $currentWins = isset($success["wins"]) ? $success["wins"] : 0;
    $currentLosses = isset($success["losses"]) ? $success["losses"] : 0;

    if ($win == 1) {
        $currentWins++;
    } else {
        $currentLosses++;
    }

    $command = "UPDATE players SET name = ?, wins = ?, losses = ?, date_last_played = ? WHERE email_address = ?";
    $stmt = $dbh->prepare($command);
    $stmt->execute([$name, $currentWins, $currentLosses, $date, $email]);

    echo "<p>Thanks for playing! Your score has been updated.</p>";
}


// Display user's updated wins/losses
$currentWins = isset($success["wins"]) ? $success["wins"] : 0;
$currentLosses = isset($success["losses"]) ? $success["losses"] : 0;
if($win == 1){
    $currentWins++;
} else {
    $currentLosses++;
}
echo "<p>Your stats: <strong>Wins:</strong> $currentWins | <strong>Losses:</strong> $currentLosses</p>";

// Fetch and display top 10 players by wins
$command = "SELECT name, wins, losses, date_last_played FROM players ORDER BY wins DESC, losses ASC LIMIT 10";
$stmt = $dbh->prepare($command);
$stmt->execute();
$topPlayers = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo "<h2>Top 10 Players</h2>";
echo "<table border='1'>";
echo "<tr><th>Name</th><th>Wins</th><th>Losses</th><th>Last Played</th></tr>";

foreach ($topPlayers as $player) {
    echo "<tr>";
    echo "<td>" . htmlspecialchars($player['name']) . "</td>";
    echo "<td>" . $player['wins'] . "</td>";
    echo "<td>" . $player['losses'] . "</td>";
    echo "<td>" . $player['date_last_played'] . "</td>";
    echo "</tr>";
}
echo "</table>";

// "Play Again" button
echo "<br><a href='index.php'><button>Play Again</button></a>";

?>
<!DOCTYPE html>
<html>
<head>
    <title>Hunt the Wumpus</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/updates.css">
</head>
<body>
    <div id="container">
    </div>
</body>
<script src="js/validate.js"></script>
</html>
