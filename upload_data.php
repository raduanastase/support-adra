<?php
include("includes/connect_db.php");
include("includes/functions.php");

if ($_GET['add-case'] == 1) {
    $qr_requester = 'insert into adra_cases set
									reporter_first_name = "' . $_POST['reporter-first-name'] . '",
									reporter_last_name = "' . $_POST['reporter-last-name'] . '",
									reporter_email = "' . $_POST['reporter-email'] . '",
									reporter_phone = "' . $_POST['reporter-phone'] . '",
									reporter_cnp = "' . $_POST['reporter-cnp'] . '",
									reporter_ci_series = "' . $_POST['reporter-ci-series'] . '",
									reporter_ci_number = "' . $_POST['reporter-ci-number'] . '",
									
									person_first_name = "' . $_POST['person-first-name'] . '",
									person_last_name = "' . $_POST['person-last-name'] . '",									
									person_cnp = "' . $_POST['person-cnp'] . '",
									person_ci_series = "' . $_POST['person-ci-series'] . '",
									person_ci_number = "' . $_POST['person-ci-number'] . '",		
									person_county_id = "' . $_POST['person-county'] . '",
									person_city = "' . $_POST['person-city'] . '",
									person_address = "' . $_POST['person-address'] . '",									
									person_description = "' . $_POST['person-description'] . '"
																		
						';
    mysqli_query($conn, $qr_requester);
    redirect("index.php");
}
?>