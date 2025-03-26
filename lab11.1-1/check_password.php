<?php
/**
 * Simple password validation script.
 * 
 * Sam Scott, McMaster University, 2025
 */

// get the password parameter
$password = trim($_POST["password"] ?? '');

if (!$password) {
    echo "No password provided.";
    exit;
}

if (strlen($password) < 6) {
    echo "Password must be at least 6 characters long.";
    exit;
}
if (!preg_match('/[A-Z]/', $password)) {
    echo "Password must contain at least one uppercase letter.";
    exit;
}
if (!preg_match('/[a-z]/', $password)) {
    echo "Password must contain at least one lowercase letter.";
    exit;
}
if (!preg_match('/[0-9]/', $password)) {
    echo "Password must contain at least one digit.";
    exit;
}
if (!preg_match('/[\W_]/', $password)) {
    echo "Password must contain at least one special character.";
    exit;
}

// If all checks pass, return valid
echo "valid";
?>
