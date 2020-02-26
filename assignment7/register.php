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
        <h1>Welcome to the successful register page!</h1>
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
$username = $_POST['username'];
$password = $_POST['password'];

$insert_this = $username.':'.$password."\n";
$filename = 'users.txt';

$users = fopen($filename, 'a') or die("Error in opening users.txt");
fwrite($users, $insert_this);
fclose($users);
print('<p>Thank you for registering, '.$username.'</p>');
?>