<!-- filepath: c:\xampp\htdocs\lab9.1-2\tip.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $bill = $_POST['bill'];
    $email = $_POST['emailaddress'];
    $confirmEmail = $_POST['confirmemailaddress'];
    $tipPercentage = $_POST['tip'];
    $creditCard = $_POST['creditcard'];

    // Validate inputs
    if (empty($name) || empty($bill) || empty($email) || empty($confirmEmail) || empty($tipPercentage) || empty($creditCard)) {
        echo "<h1>Error: All fields are required.</h1>";
        exit;
    }

    if ($bill < 0 || $tipPercentage < 0) {
        echo "<h1>Error: Bill amount and tip percentage must be non-negative.</h1>";
        exit;
    }

    if ($email !== $confirmEmail) {
        echo "<h1>Error: Email addresses do not match.</h1>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<h1>Error: Invalid email format.</h1>";
        exit;
    }

    if (!preg_match("/^\d{16}$/", $creditCard)) {
        echo "<h1>Error: Credit card number must be 16 digits long.</h1>";
        exit;
    }

    // Calculate tip and total
    $tipAmount = $bill * ($tipPercentage / 100);
    $totalAmount = $bill + $tipAmount;

    // Display the results
    echo "<style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
            }
            h1 {
                color: #333;
                font-size: 24px;
                margin-bottom: 20px;
            }
            p {
                color: #555;
                font-size: 18px;
                margin: 10px 0;
            }
          </style>";
    echo "<div class='container'>";
    echo "<h1>Tip Calculation</h1>";
    echo "<p>Server Name: $name</p>";
    echo "<p>Bill Amount: $" . number_format($bill, 2) . "</p>";
    echo "<p>Tip Percentage: $tipPercentage%</p>";
    echo "<p>Tip Amount: $" . number_format($tipAmount, 2) . "</p>";
    echo "<p>Total Amount: $" . number_format($totalAmount, 2) . "</p>";
    echo "</div>";
} else {
    echo "<h1>Error: Invalid request method.</h1>";
}
?>