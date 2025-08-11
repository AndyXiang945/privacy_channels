<?php
$servername = "";
$database = ""; 
$username = "";
$password = "";


$ProlificID = $_POST["ProlificID"];

//------------------//
// Create connection//
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//selects all rows with matching IDs
$sql = "SELECT * FROM responses_main WHERE ProlificID = '$ProlificID';";
$result = mysqli_query($conn, $sql);
//Gets number of rows
$num_rows = mysqli_num_rows($result);



if($num_rows + $num_rows_from_piolt > 0){
    echo 'rejec';
} else {
    echo 'accept';
}

$conn->close();
http_response_code(200);
?>