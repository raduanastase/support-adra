<?php
$servername = "localhost";

   $username_db = "adra_admin";
   $password_db = "amicus";
   $host_db = "localhost";
   $name_db = "adra_case_db";

   $conn = new mysqli($servername, $username_db, $password_db);

   // Check connection
   if ($conn->connect_error) {
       die("Connection failed: " . $conn->connect_error);
   } 

   mysqli_query($conn, "SET NAMES 'utf8'");


   $selected = mysqli_select_db($conn, "adra_case_db") 
           or die("Could not select examples");


//echo "Connected successfully";
?>

