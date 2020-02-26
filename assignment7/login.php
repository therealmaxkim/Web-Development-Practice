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
        <h1>Welcome to the page after a login!</h1>
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

$filename = 'users.txt';

$users = fopen($filename, 'r') or die("Error in trying to open users.txt");
$found_user = FALSE;

while(!(feof($users))) {
    $line = fgets($users);
    $line = trim($line);
    $info = explode(':', $line);
    if (($info[0] == $username) && ($info[1] == $password)) {
        $found_user = TRUE;
        break;
    }
}
if ($found_user) {
    print('<p>Thank you for signing in, '.$username.'!</p>');
} else {
    print("<p>Failed to find user. Try putting your username and password again</p>");
}
fclose($users);

?>