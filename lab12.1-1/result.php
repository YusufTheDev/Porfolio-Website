<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $guess = intval($_POST['guess']);
    $random_number = $_SESSION['random_number'];

    if ($guess == $random_number) {
        echo "<h2>Congratulations! You guessed the correct number: $random_number</h2>";
        session_destroy(); // End session
        echo '<br><a href="index.php">Play Again</a>';
    } else {
        echo "<h2>Wrong guess! Try again.</h2>";
        echo '<br><a href="guess.php">Go Back</a>';
    }
}
?>
