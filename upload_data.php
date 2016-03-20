<?php
include("includes/connect_db.php");
include("includes/functions.php");
	
	if($_GET['add-case'] == 1)
	{
		echo 'here';
		var_dump($_POST);
		$qr_requester = 'insert into adra_cases set
									reporter_first_name = "'.$_POST['reporter-name'].'",
									reporter_last_name = "'.$_POST['reporter-surname'].'",
									reporter_email = "'.$_POST['reporter-email'].'",
									reporter_phone = "'.$_POST['reporter-phone'].'",
									reporter_cnp = "'.$_POST['reporter-cnp'].'",
									reporter_ci_series = "'.$_POST['reporter-bi-series'].'",
									reporter_ci_number = "'.$_POST['reporter-bi-number'].'",
									
									person_first_name = "'.$_POST['person-surname'].'",
									person_last_name = "'.$_POST['person-name'].'",									
									person_cnp = "'.$_POST['person-cnp'].'",
									person_ci_series = "'.$_POST['person-bi-series'].'",
									person_ci_number = "'.$_POST['person-bi-number'].'",		
									person_county_id = "'.$_POST['person-region'].'",
									person_city = "'.$_POST['person-city'].'",
									person_adress = "'.$_POST['person-adress'].'",
									
									person_description = "'.$_POST['person-description'].'",
									IDrequester = "'.$IDrequester.'"									
						';						
		mysqli_query($conn,$qr_requester);	
			
	}
?>