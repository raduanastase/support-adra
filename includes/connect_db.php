<?php
$server_name = "mysql.hostinger.ro";

$username_db = "u106588273_root";
$password_db = "just4u";
$name_db = "u106588273_adra";

$conn = new mysqli($server_name, $username_db, $password_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_query($conn, "SET NAMES 'utf8'");


$selected = mysqli_select_db($conn, $name_db)
or die("Could not select examples");


//echo "Connected successfully";
?>

