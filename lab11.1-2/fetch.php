<?php
// Database connection
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
    die(json_encode(["error" => "Couldn't connect to the database: " . $e->getMessage()]));
}

// Get and validate user input
$min_population = filter_input(INPUT_GET, "min_population", FILTER_VALIDATE_INT);
$max_population = filter_input(INPUT_GET, "max_population", FILTER_VALIDATE_INT);

if ($min_population === false || $max_population === false || $min_population < 0 || $max_population < $min_population) {
    echo json_encode(["error" => "Invalid population range"]);
    exit;
}

// Prepare and execute the query
$command = "SELECT Name, CountryCode, Population FROM City WHERE Population BETWEEN ? AND ? ORDER BY Population DESC";
$stmt = $dbh->prepare($command);
$success = $stmt->execute([$min_population, $max_population]);

// Fetch results into an associative array
$cityList = [];
while ($city = $stmt->fetch(PDO::FETCH_ASSOC)) {
    array_push($cityList, $city);
}

// Return JSON response
echo json_encode($cityList);
?>
