<?php
//Yusuf Khan 400565596
//April 03, 2025
//Php code to connect to the database
//

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
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}