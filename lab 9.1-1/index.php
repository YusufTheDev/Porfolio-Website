<!DOCTYPE html>
<html>
<head>
    <title>Slot Machine PHP</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="slot-machine">
        <div class="slots">
            <?php
            $fruits = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'];
            $slot1 = rand(0, 6);
            $slot2 = rand(0, 6);
            $slot3 = rand(0, 6);
            echo "<img src='images/$fruits[$slot1]' alt='Slot 1' />";
            echo "<img src='images/$fruits[$slot2]' alt='Slot 2' />";
            echo "<img src='images/$fruits[$slot3]' alt='Slot 3' />";
            ?>
        </div>
        <div class="message">
            <?php
            if ($slot1 == $slot2 && $slot2 == $slot3) {
                echo "<h1>🎉 Jackpot! 🎉</h1>";
            } else {
                echo "<h1>❌ Try Again! ❌</h1>";
            }
            ?>
        </div>
        <form method="post">
            <button class="button" type="submit">Spin Again</button>
        </form>
    </div>
</body>
</html>
