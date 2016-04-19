<?php
function refresh($url)
{
    header("Refresh:0;URL=" . $url);
    //echo '<a href="'.$url.'">Pagina se incarca aici</a>';
    exit();
}

function getRawData($conn)
{
    $counties = array();
    $res_county = mysqli_query($conn, 'select * from ps_state order by name');
    while ($row_county = mysqli_fetch_array($res_county)) {
        $tempObj = new stdClass();
        $tempObj-> id = $row_county['id'];
        $tempObj-> name = $row_county['name'];
        array_push($counties, $tempObj);
    }

    $data = new stdClass();
    $data->loggedIn = isset($_SESSION['user']);
    $data->counties = $counties;

    echo json_encode($data);
}
?>