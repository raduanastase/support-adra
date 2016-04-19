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
    <title>Sustine ADRA</title>
    <link rel="stylesheet" href="css/vendor/foundation.css"/>
    <link rel="stylesheet" href="css/app.css"/>
</head>
<body>
<div class="main" data-raw='<?php getRawData($conn) ?>'></div>
<script src="public/js/bundle.js"></script>
</body>
</html>
