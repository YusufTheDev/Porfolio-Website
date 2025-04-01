<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game - Choose Range</title>
</head>
<body>
    <h2>Step 1: Choose a Number Range</h2>
    <form action="guess.php" method="post">
        <label>Enter Minimum Value: </label>
        <input type="number" name="min" required><br><br>
        
        <label>Enter Maximum Value: </label>
        <input type="number" name="max" required><br><br>

        <button type="submit">Start Game</button>
    </form>
</body>
</html>
