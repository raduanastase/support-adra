<?php
include("includes/connect_db.php");
include("includes/functions.php");
session_start();
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Foundation | Welcome</title>
    <link rel="stylesheet" href="css/vendor/foundation.css"/>
    <link rel="stylesheet" href="css/app.css"/>
</head>
<body>

<?php
include("includes/head.php");
include("includes/dashboard.php");
include("includes/add-case.php");
include("includes/view-case.php");
include("includes/view-case-template.php");
include("includes/error.php");
?>

<script src="js/vendor/jquery.min.js"></script>
<script src="js/vendor/what-input.min.js"></script>
<script src="js/vendor/foundation.min.js"></script>
<script src="js/app.js"></script>
</body>
</html>
