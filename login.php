
<?php
   include("includes/conect_db.php");
   
   include("includes/functions.php");
    session_start();

   
   if (isset($_SESSION['user'])){
    refresh("index.php");
    }
    else{
         if($_SERVER["REQUEST_METHOD"] == "POST") 
       {
          // username and password sent from form 
          
          $myusername = mysqli_real_escape_string($_POST['username']);
          $mypassword = mysqli_real_escape_string($_POST['password']); 
          
         
          $sql = 'SELECT * FROM adra_users WHERE  username = "'.$_POST['username'].'" and password = "'.md5($_POST['password']).'"';
          $result = mysqli_query($conn,$sql);
          $row = mysqli_fetch_array($result);
          //printf ("%s (%s)\n",$row[7],$row[0]);

          $count = mysqli_num_rows($result);
          //echo $count;
          // If result matched $myusername and $mypassword, table row must be 1 row
          
          if($count == 1) {
            
            $_SESSION['user'] = $row;
            
           // echo $_SESSION['ID'];
           // echo $_SESSION['type'];
             refresh("index.php");
             //header("location: welcome.php");
          }else {
             $error = "Your Login Name or Password is invalid";
          }
       }
    }
    mysqli_close($conn);
?>

<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Login</title>
    <link rel="stylesheet" href="css/foundation.css"/>
    <link rel="stylesheet" href="css/login.css"/>
</head>
<body>
<div class="row">
    <div class="medium-6 medium-centered large-4 large-centered columns text-center">
        <img class="logo" src="img/adra.png">
    </div>
</div>
<div class="row">
    <div class="medium-6 medium-centered large-4 large-centered columns">
        <form id="log-in-form" method="post">
            <div class="row column" id="log-in">
                <h4 class="text-center">Intra in contul tau</h4>
                <label>Nume utilizator
                    <input type="text" placeholder="nume-utilizator" name="username">
                </label>
                <label>Parola
                    <input type="password" placeholder="parola" name="password">
                </label>
                <p><input type="submit" class="button expanded" value="Intră în cont"/></p>
            </div>
        </form>

    </div>
</div>
</body>
</html>