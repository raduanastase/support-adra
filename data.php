<?php
header('Content-Type: application/json');
include("includes/connect_db.php");
session_start();

$args = explode('/', rtrim($_SERVER['QUERY_STRING'], '/'));
$method = array_shift($args);


//type of cases
foreach ($_GET as $key => $value) {
    switch ($key) {
        case 'pending' :
            $acType = 0;
            break;
        case 'approved' :
            $acType = 1;
            break;
        case 'resolved' :
            $acType = 2;
            break;
        case 'rejected' :
            $acType = 3;
            break;
        default :
            return;
            break;
    }

    $page = mysqli_real_escape_string($conn, $value);
    $page = ($page - 1) * 10;
    //todo verify why i don't get all the rows, at approved
    $result = mysqli_query($conn, "SELECT ac.ID, ac.case_name, ac.person_description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=$acType AND acd.is_cover_image = 1 ORDER BY ac.ID DESC LIMIT 10 OFFSET " . $page);

    $caseCount = mysqli_query($conn, "SELECT COUNT(*) AS case_count FROM adra_cases WHERE type=$acType");
    $response = array();
    $responseCase = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = $row;
    }
    while ($row = mysqli_fetch_array($caseCount, MYSQLI_ASSOC)) {
        $responseCase[] = $row;
    }
    echo json_encode(array($response, $responseCase));
    die();
}


if (isset($_GET["case_id"])) {

    $result = mysqli_query($conn, "SELECT * FROM adra_cases WHERE ID = " . mysqli_real_escape_string($conn, $_GET['case_id']));
    $result_image = mysqli_query($conn, "SELECT file_path, privat_type, is_cover_image FROM adra_cases_doc WHERE ID_case = " . mysqli_real_escape_string($conn, $_GET['case_id']));
    $response = array();
    $response_image = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = $row;
    }
    while ($row = mysqli_fetch_array($result_image, MYSQLI_ASSOC)) {
        $response_image[] = $row;
    }
    echo json_encode(array($response, $response_image));
    die();
}

if (isset($_GET["all"])) {

    $result = mysqli_query($conn, "SELECT ac.ID, ac.name, ac.description, acd.file_path FROM adra_cases ac LEFT JOIN adra_cases_doc as acd on ac.ID = acd.ID_case WHERE ac.type=1");
    $response = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = $row;
    }
    echo json_encode(array('success' => true, $response));
    die();
}

?>