<?php
	header('Content-Type: application/json');
    include("includes/connect_db.php");
   	session_start();


	if(isset($_GET["case_id"])) 
	{	


		$result = mysqli_query($conn, "SELECT * FROM adra_cases WHERE ID = ".mysqli_real_escape_string($conn, $_GET['case_id']));
		$result_image = mysqli_query($conn, "SELECT file_path, private_type, is_cover_image FROM adra_cases_doc WHERE ID_case = ".mysqli_real_escape_string($conn, $_GET['case_id']));
		$raspuns = array();
		$raspuns_image = array();

			while ($row = mysqli_fetch_array($conn, $result, MYSQLI_ASSOC)) {
				$raspuns[] = $row;
			}
			while ($row = mysqli_fetch_array($conn, $result_image, MYSQLI_ASSOC)) {
				$raspuns_image[] = $row;
			}
		echo json_encode(array($raspuns,$raspuns_image));
		die();
	}


	if(isset($_GET["approved"])) 
	{	$page=mysqli_real_escape_string($conn, $_GET["approved"]);
		$page=($page-1)*10;
		$result = mysqli_query($conn, "SELECT ac.ID, ac.case_name, ac.person_description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=1 AND acd.is_cover_image = 1 ORDER BY ac.ID DESC LIMIT 10 OFFSET ".$page);

		$case_count = mysqli_query($conn, "SELECT COUNT(*) AS case_count FROM adra_cases WHERE type= 1");
		$raspuns = array();

		while ($row = mysqli_fetch_array($conn, $result, MYSQLI_ASSOC)) {
			$raspuns[] = $row;
		}
		while ($row = mysqli_fetch_array($conn, $case_count, MYSQLI_ASSOC)) {
			$raspuns_case[] = $row;
		}
		echo json_encode(array($raspuns,$raspuns_case));
		die();
	}

	if(isset($_GET["pending"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=0");
		$raspuns = array();

		while ($row = mysqli_fetch_array($conn, $result, MYSQLI_ASSOC)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}

	if(isset($_GET["resolved"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=2");
		$raspuns = array();

		while ($row = mysqli_fetch_array($conn, $result, MYSQLI_ASSOC)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}

	if(isset($_GET["rejected"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=3");
		$raspuns = array();

		while ($row = mysqli_fetch_array($conn, $result)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}
	if(isset($_GET["all"])) 
	{	

		$result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=1");
		$raspuns = array();

		while ($row = mysqli_fetch_array($conn, $result, MYSQLI_ASSOC)) {
			$raspuns[] = $row;
		}
		echo json_encode(array('success'=>true,$raspuns));
		die();
	}

?>