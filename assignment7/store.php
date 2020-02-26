<!DOCTYPE HTML> 

<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- External CSS stylesheet-->
        <link rel="stylesheet" href="style.css">
    </head>

    <nav class="navbar">
        <ul>
            <li><a href="store.html">Assignment 7: Homepage/Store</a></li>
            <li><a href="register.html">Register</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="search.html">Search</a></li>
        </ul>
    </nav>
    <nav class="navbar">
        <ul>
            <li><a href="register.source.php">Register PHP Source</a></li>
            <li><a href="login.source.php">Login PHP Source</a></li>
            <li><a href="search.source.php">Search PHP Source</a></li>
            <li><a href="store.source.php">Store PHP Source</a></li>
        </ul>
    </nav>

    <div class="main-header">
        <h1>Welcome to the page where I list the results of the store</h1>
    </div>

    <body>
    </body>

    <footer>
        <div class="footer">
            <p>© 2019 Gangmin (Max) Kim</p>
        </div>
    </footer>
</html>

<?php

$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$email = $_POST['email'];
$zipcode = $_POST['zipcode'];

$amount1 = $_POST['amount1'];
$amount2 = $_POST['amount2'];
$amount3 = $_POST['amount3'];

$subtotal1 = $_POST['subtotal1'];
$subtotal2 = $_POST['subtotal2'];
$subtotal3 = $_POST['subtotal3'];

$filename = "shop.txt";
$shop = fopen($filename, 'a') or die("Error in opening shop.txt");

$line = "";
print('<ul>');
foreach ($_POST as $key => $value) {
    $line .= $value . ":";
    print('<li>'.$key.':'.$value.'</li>');
}
print('</ul>');
$line .= "\n";

fwrite($shop, $line);
fclose($shop);

print(' <p class="center">Thank you for shopping with us, '.$fname.' '.$lname.'</p>
        <p class="center">Your email: '.$email.'</p>
        <p class="center">Your zipcode: '.$zipcode.'</p>
        <p class="center">Credit Card Info is hidden.</p>
        <div class="col">
            <div class="row"> 
                <ul>
                    <li>Hoodie</li>
                    <li>'.$amount1.'</li>
                    <li>'.$subtotal1.'</li>
                </ul>
            </div>
            <div class="row"> 
                <ul>
                    <li>T-Shirt</li>
                    <li>'.$amount2.'</li>
                    <li>'.$subtotal2.'</li>
                </ul>
            </div>
            <div class="row"> 
                <ul>
                    <li>Socks</li>
                    <li>'.$amount3.'</li>
                    <li>'.$subtotal3.'</li>
                </ul>
            </div>
        </div>');

?>