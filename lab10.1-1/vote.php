<?php
// Database connection using school's MySQL server
$host = "cs1xd3.cas.mcmaster.ca"; 
$dbname = "khany34_db";
$password = "n92f4/JY";  

try {
    $dbh = new PDO(
        "mysql:host=localhost;dbname=$dbname",
        "khany34_local",
        "$password"
    );
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die("ERROR: Couldn't connect. " . $e->getMessage());
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get and sanitize user input
    $poll_id = filter_input(INPUT_POST, "poll_id", FILTER_VALIDATE_INT);
    $option = filter_input(INPUT_POST, "option", FILTER_VALIDATE_INT, [
        "options" => ["min_range" => 1, "max_range" => 4]
    ]);

    // Validate inputs
    if ($poll_id === false || $option === false) {
        $error = "Invalid poll ID or option. Please enter valid values.";
    } else {
        // Prepare the SQL query
        $command = "UPDATE poll SET vote$option = vote$option + 1 WHERE id = ?";
        $stmt = $dbh->prepare($command);
        
        // Execute the query
        $success = $stmt->execute([$poll_id]);
        
        // Check if update was successful
        if ($success && $stmt->rowCount() > 0) {
            $message = "Your vote has been recorded successfully!";
        } else {
            $error = "Vote not recorded. Invalid poll ID or database issue.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vote in a Poll</title>
</head>
<body>
    <h2>Vote in a Poll</h2>
    <?php if (!empty($error)) echo "<p style='color: red;'>$error</p>"; ?>
    <?php if (!empty($message)) echo "<p style='color: green;'>$message</p>"; ?>
    
    <form method="post">
        <label for="poll_id">Poll ID:</label>
        <input type="number" name="poll_id" id="poll_id" required><br>
        
        <label for="option">Choose an Option (1-4):</label>
        <select name="option" id="option" required>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
        </select><br>
        
        <button type="submit">Vote</button>
    </form>
</body>
</html>
