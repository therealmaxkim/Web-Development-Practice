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
        <h1>Welcome to the page with search results!</h1>
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

print("<p>Here are the values passed from the form: </p><br>\n");
foreach ($_GET as $key => $value) {
    print("<p>".$key.":".$value."</p>");
    print("");
}
$name = $_GET['searchfor'];

$filename = "products.txt";

$products = fopen($filename, "r") or die("Error in opening the products.txt");

print("------------------------------------");
print("Here are the matches:");
while(!feof($products)) {
    $line = fgets($products);
    $line = trim($line);
    $info = explode(':', $line);
    if(($name == $info[0]) or ($name == $info[1]) or ($name == $info[2]) or ($name == $info[3])) {
        print("------------------------------------");
        print("<p>Name: ".$info[0]."</p>");
        print("");
        print("<p>Product Description: ".$info[1]."</p>");
        print("");
        print("<p>Quantity: ".$info[2]."</p>");
        print("");
        print("<p>Cost: ".$info[3]."</p>");
        print("");
    }
}
fclose($products);


?>