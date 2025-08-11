<?php

$servername = "";
$database = ""; 
$username = "";
$password = "";

$total_assignements = 0;

$app_list = Array();
//------------------//
// Create connection//
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM responses_main;";
$total_result = mysqli_query($conn, $sql);
$total_assignements = mysqli_num_rows($total_result);

if ($total_assignements == 0){
    $app_list = Array("Bumble", "USA TODAY", "DW", "Once");
} else {

    $sql = "SELECT * FROM responses_main WHERE assignedApp = 'Bumble';";
    $bumble_result = mysqli_query($conn, $sql);
    $bumble_result_rows = mysqli_num_rows($bumble_result);
    if($bumble_result_rows / $total_assignements <= 0.25){
        array_push($app_list, "Bumble");
    }


    $sql = "SELECT * FROM responses_main WHERE assignedApp = 'USA TODAY';";
    $usa_result = mysqli_query($conn, $sql);
    $usa_result_rows = mysqli_num_rows($usa_result);
    if($usa_result_rows / $total_assignements <= 0.25){
        array_push($app_list, "USA TODAY");
    }


    $sql = "SELECT * FROM responses_main WHERE assignedApp = 'DW';";
    $dw_result = mysqli_query($conn, $sql);
    $dw_result_rows = mysqli_num_rows($dw_result);
    if($dw_result_rows / $total_assignements <= 0.25){
        array_push($app_list, "DW");
    } 

    $sql = "SELECT * FROM responses_main WHERE assignedApp = 'Once';";
    $once_result = mysqli_query($conn, $sql);
    $once_result_rows = mysqli_num_rows($once_result);
    if($once_result_rows / $total_assignements <= 0.25){
        array_push($app_list, "Once");
    }


}

$conn->close();

echo $app_list[array_rand($app_list)];
http_response_code(200);

?>