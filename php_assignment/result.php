<?php
include "connect.php";
//Yusuf Khan 400565596
//April 03, 2025
//Php code that displays the result of the game and sends data to save.php

echo "<h1>Hunt the Wumpus!</h1>";
// Get and validate user input
$row = filter_input(INPUT_GET, "row", FILTER_VALIDATE_INT);
$col = filter_input(INPUT_GET, "column", FILTER_VALIDATE_INT);

if ($row === NULL || $col === NULL) {
    echo json_encode(["error" => "Invalid row/col input"]);
    exit;
}

//prepare SQL Command
$command = "SELECT row_num, col_num FROM wumpuses WHERE row_num = ? AND col_num = ?";

$stmt = $dbh->prepare($command);

//Execute SQL Command
$stmt->execute([$row, $col]);

//check if it could fetch anything
$success = $stmt->fetch(PDO::FETCH_ASSOC);

$win = $success ? 1 : 0;

//found a wumpus if success has a value
if ($success) {
    echo "<p>Good job, you found a wumpus!</p>";
    echo "<div id='result-container'>";
    echo "<img src='images/winimg.png' alt='You Win!'>";
    echo "<form id='submitform' action='save.php' method='post'>";
    echo "<div><label for='name'>Name:</label>";
    echo "<input type='text' name='name' id='name' required></div>";
    echo "<div><label for='email'>Email:</label>";
    echo "<input type='email' name='email' id='email' required></div>";
    echo "<div id='error' style='color: red; display: none;'></div>";
    echo "<input type='submit' value='Submit'>";
    echo "<input type='hidden' name='userstatus' value='$win'>";
    echo "</form>";
    echo "</div>";
} else {
    echo "<p>Uh oh, you did not find a wumpus!</p>";
    echo "<div id='result-container'>";
    echo "<img src='images/loseimg.png' alt='You Lose!'>";
    echo "<form id='submitform' action='save.php' method='post'>";
    echo "<div><label for='name'>Name:</label>";
    echo "<input type='text' name='name' id='name' required></div>";
    echo "<div><label for='email'>Email:</label>";
    echo "<input type='email' name='email' id='email' required></div>";
    echo "<div id='error' style='color: red; display: none;'></div>";
    echo "<input type='submit' value='Submit'>";
    echo "<input type='hidden' name='userstatus' value='$win'>";
    echo "</form>";
    echo "</div>";
}
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