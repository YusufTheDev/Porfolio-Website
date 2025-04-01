<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['min'] = intval($_POST['min']);
    $_SESSION['max'] = intval($_POST['max']);
    
    // Generate a random number
    $_SESSION['random_number'] = rand($_SESSION['min'], $_SESSION['max']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game - Make a Guess</title>
</head>
<body>
    <h2>Step 2: Guess a Number Between <?php echo $_SESSION['min']; ?> and <?php echo $_SESSION['max']; ?></h2>
    <form action="result.php" method="post">
        <label>Enter Your Guess: </label>
        <input type="number" name="guess" required><br><br>
        <button type="submit">Submit Guess</button>
    </form>
</body>
</html>
