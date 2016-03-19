<?php
include("includes/conect_db.php");   
include("includes/functions.php");
	
	if($_GET['add-case'] == 1)
	{
		echo 'here';
		var_dump($_POST);
		$qr_requester = 'insert into adra_requester set
									first_name = "'.$_POST['reporter-name'].'",
									last_name = "'.$_POST['reporter-surname'].'",
									email = "'.$_POST['reporter-email'].'",
									phone = "'.$_POST['reporter-phone'].'",
									cnp = "'.$_POST['reporter-cnp'].'",
									ci_serie = "'.$_POST['reporter-bi-series'].'",
									ci_nr = "'.$_POST['reporter-bi-number'].'"									
						';
		mysqli_query($conn,$qr_requester);
		$IDrequester = mysql_insert_id();
			
		$qr_insert = 'insert into adra_cases set
									first_name = "'.$_POST['person-surname'].'",
									last_name = "'.$_POST['person-name'].'",									
									cnp = "'.$_POST['person-cnp'].'",
									ci_serie = "'.$_POST['person-bi-series'].'",
									ci_nr = "'.$_POST['person-bi-number'].'",		
							IDcounty = "'.$_POST['person-region'].'",
							city = "'.$_POST['person-city'].'",
							adress = "'.$_POST['person-adress'].'",
							
							description = "'.$_POST['person-description'].'",
							IDrequester = "'.$IDrequester.'"
										
								
					  ';
		mysqli_query($conn,$qr_insert);
		$IDcase = mysql_insert_id();			  
	}
?>