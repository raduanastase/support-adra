<?php
	header('Content-Type: application/json');
    include("includes/connect_db.php");
   	session_start();


	// if(isset($_GET["case_id"]) && isset($_SESSION['user'])) 
	// {	


	// 	$result = mysqli_query($conn, "SELECT * FROM adra_cases WHERE ID = ".mysqli_real_escape_string($conn, $_GET['case_id']));
	// 	$raspuns = array();

	// 	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
	// 		$raspuns[] = $row;
	// 	}
	// 	echo json_encode(array('success'=>true,$raspuns));
	// 	die();
	// }

	if(isset($_GET["case_id"])) 
	{	


		$result = mysqli_query($conn, "SELECT * FROM adra_cases WHERE ID = ".mysqli_real_escape_string($conn, $_GET['case_id']));
		$raspuns = array();

			while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
				$raspuns[] = $row;
			}
		echo json_encode($raspuns);
		die();
	}


	if(isset($_GET["approved"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=1");
		$raspuns = array();

		while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}

	if(isset($_GET["pending"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=0");
		$raspuns = array();

		while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}

	if(isset($_GET["resolved"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=2");
		$raspuns = array();

		while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}

	if(isset($_GET["rejected"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=3");
		$raspuns = array();

		while ($row = mysqli_fetch_array($result)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}


?>