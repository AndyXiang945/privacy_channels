<?php

$servername = "";
$database = ""; 
$username = "";
$password = "";

function clean($content) {
    return str_replace("'", '', $content);
}

//ID and time
$ProlificID = clean($_POST["ProlificID"]);
$assignedApp = clean($_POST["assignedApp"]);
$channelOrder = clean($_POST["channelOrder"]);
$surveyBegin = clean($_POST["surveyBegin"]);
$surveyEnd = clean($_POST["surveyEnd"]);
$surveyCode = clean($_POST["surveyCode"]);
$scroll_ds = clean($_POST["scroll_ds"]);
$scroll_pm = clean($_POST["scroll_pm"]);
$scroll_pp = clean($_POST["scroll_pp"]); 

//Question A
$A1 = clean($_POST["A1"]);
$A1_other = clean($_POST["A1_other"]);
$A2 = clean($_POST["A2"]);
$A3 = clean($_POST["A3"]);
$A4 = clean($_POST["A4"]);
$A5 = clean($_POST["A5"]);

//Question B
$B1 = clean($_POST["B1"]);
$B2 = clean($_POST["B2"]);
$B3 = clean($_POST["B3"]);
$B4 = clean($_POST["B4"]);
$B5 = clean($_POST["B5"]);
$B6= clean($_POST["B6"]);
$B7 = clean($_POST["B7"]);
$B7_answer_open = clean($_POST["B7_answer_open"]);

// Question C - Data Safety
$DS_C1 = clean($_POST["DS_C1"]);
$DS_C2 = clean($_POST["DS_C2"]);
$DS_C3 = clean($_POST["DS_C3"]);
$DS_C3_other = clean($_POST["DS_C3_other"]);
$DS_C4 = clean($_POST["DS_C4"]);
$DS_C4_other = clean($_POST["DS_C4_other"]);
$DS_C5 = clean($_POST["DS_C5"]);
$DS_C5_other = clean($_POST["DS_C5_other"]);
$DS_C6 = clean($_POST["DS_C6"]);
$DS_C6_other = clean($_POST["DS_C6_other"]);
$DS_C7 = clean($_POST["DS_C7"]);
$DS_C7_other = clean($_POST["DS_C7_other"]);
$DS_C8 = clean($_POST["DS_C8"]);
$DS_C9 = clean($_POST["DS_C9"]);
$DS_C10 = clean($_POST["DS_C10"]);
$DS_C11 = clean($_POST["DS_C11"]);
$DS_C12 = clean($_POST["DS_C12"]);
$DS_C12_answer_open = clean($_POST["DS_C12_answer_open"]);
$DS_C13 = clean($_POST["DS_C13"]);
$DS_C13_answer_open = clean($_POST["DS_C13_answer_open"]);

//Questions C - Privacy Policy
$PP_C1 = clean($_POST["PP_C1"]);
$PP_C2 = clean($_POST["PP_C2"]);
$PP_C3 = clean($_POST["PP_C3"]);
$PP_C3_other = clean($_POST["PP_C3_other"]);
$PP_C4 = clean($_POST["PP_C4"]);
$PP_C4_other = clean($_POST["PP_C4_other"]);
$PP_C5 = clean($_POST["PP_C5"]);
$PP_C5_other = clean($_POST["PP_C5_other"]);
$PP_C6 = clean($_POST["PP_C6"]);
$PP_C6_other = clean($_POST["PP_C6_other"]);
$PP_C7 = clean($_POST["PP_C7"]);
$PP_C7_other = clean($_POST["PP_C7_other"]);
$PP_C8 = clean($_POST["PP_C8"]);
$PP_C9 = clean($_POST["PP_C9"]);
$PP_C10 = clean($_POST["PP_C10"]);
$PP_C11 = clean($_POST["PP_C11"]);
$PP_C12 = clean($_POST["PP_C12"]);
$PP_C12_answer_open = clean($_POST["PP_C12_answer_open"]);
$PP_C13 = clean($_POST["PP_C13"]);
$PP_C13_answer_open = clean($_POST["PP_C13_answer_open"]);

// Question C - Permission
$PM_C1 = clean($_POST["PM_C1"]);
$PM_C2 = clean($_POST["PM_C2"]);
$PM_C3 = clean($_POST["PM_C3"]);
$PM_C3_other = clean($_POST["PM_C3_other"]);
$PM_C4 = clean($_POST["PM_C4"]);
$PM_C4_other = clean($_POST["PM_C4_other"]);
$PM_C5 = clean($_POST["PM_C5"]);
$PM_C5_other = clean($_POST["PM_C5_other"]);
$PM_C6 = clean($_POST["PM_C6"]);
$PM_C6_other = clean($_POST["PM_C6_other"]);
$PM_C7 = clean($_POST["PM_C7"]);
$PM_C7_other = clean($_POST["PM_C7_other"]);
$PM_C8 = clean($_POST["PM_C8"]);
$PM_C9 = clean($_POST["PM_C9"]);
$PM_C10 = clean($_POST["PM_C10"]);
$PM_C11 = clean($_POST["PM_C11"]);
$PM_C12 = clean($_POST["PM_C12"]);
$PM_C12_answer_open = clean($_POST["PM_C12_answer_open"]);
$PM_C13 = clean($_POST["PM_C13"]);
$PM_C13_answer_open = clean($_POST["PM_C13_answer_open"]);

//Questions D
$D1 = clean($_POST["D1"]);
$D1_answer_open = clean($_POST["D1_answer_open"]);
$D2 = clean($_POST["D2"]);
$D2_answer_open = clean($_POST["D2_answer_open"]);
$D3 = clean($_POST["D3"]);
$D3_answer_open = clean($_POST["D3_answer_open"]);
$D4 = clean($_POST["D4"]);
$D4_answer_open = clean($_POST["D4_answer_open"]);
$D5 = clean($_POST["D5"]);
$D5_other = clean($_POST["D5_other"]);
$D6_answer_open = clean($_POST["D6_answer_open"]);

//Questions E
$E1 = clean($_POST["E1"]);
$E1_other = clean($_POST["E1_other"]);
$E2 = clean($_POST["E2"]);
$E3 = clean($_POST["E3"]);
$E3_other = clean($_POST["E3_other"]);
$E4 = clean($_POST["E4"]);


//------------------//
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "We're Connected\n";

$sql = "INSERT INTO responses_main
(
    ProlificID,
    assignedApp,
    channelOrder,
    surveyBegin,
    surveyEnd,
    surveyCode,
    scroll_ds,
    scroll_pm,
    scroll_pp,
    A1,
    A1_other,
    A2,
    A3,
    A4,
    A5,
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7,
    B7_answer_open,
    DS_C1,
    DS_C2,
    DS_C3,
    DS_C3_other,
    DS_C4,
    DS_C4_other,
    DS_C5,
    DS_C5_other,
    DS_C6,
    DS_C6_other,
    DS_C7,
    DS_C7_other,
    DS_C8,
    DS_C9,
    DS_C10,
    DS_C11,
    DS_C12,
    DS_C12_answer_open,
    DS_C13,
    DS_C13_answer_open,
    PP_C1,
    PP_C2,
    PP_C3,
    PP_C3_other,
    PP_C4,
    PP_C4_other,
    PP_C5,
    PP_C5_other,
    PP_C6,
    PP_C6_other,
    PP_C7,
    PP_C7_other,
    PP_C8,
    PP_C9,
    PP_C10,
    PP_C11,
    PP_C12,
    PP_C12_answer_open,
    PP_C13,
    PP_C13_answer_open,
    PM_C1,
    PM_C2,
    PM_C3,
    PM_C3_other,
    PM_C4,
    PM_C4_other,
    PM_C5,
    PM_C5_other,
    PM_C6,
    PM_C6_other,
    PM_C7,
    PM_C7_other,
    PM_C8,
    PM_C9,
    PM_C10,
    PM_C11,
    PM_C12,
    PM_C12_answer_open,
    PM_C13,
    PM_C13_answer_open,
    D1,
    D1_answer_open,
    D2,
    D2_answer_open,
    D3,
    D3_answer_open,
    D4,
    D4_answer_open,
    D5,
    D5_other,
    D6_answer_open,
    E1,
    E1_other,
    E2,
    E3,
    E3_other,
    E4
)
VALUES
(
    '$ProlificID',
    '$assignedApp',
    '$channelOrder',
    '$surveyBegin',
    '$surveyEnd',
    '$surveyCode',
    '$scroll_ds',
    '$scroll_pm',
    '$scroll_pp',
    '$A1',
    '$A1_other',
    '$A2',
    '$A3',
    '$A4',
    '$A5',
    '$B1',
    '$B2',
    '$B3',
    '$B4',
    '$B5',
    '$B6',
    '$B7',
    '$B7_answer_open',
    '$DS_C1',
    '$DS_C2',
    '$DS_C3',
    '$DS_C3_other',
    '$DS_C4',
    '$DS_C4_other',
    '$DS_C5',
    '$DS_C5_other',
    '$DS_C6',
    '$DS_C6_other',
    '$DS_C7',
    '$DS_C7_other',
    '$DS_C8',
    '$DS_C9',
    '$DS_C10',
    '$DS_C11',
    '$DS_C12',
    '$DS_C12_answer_open',
    '$DS_C13',
    '$DS_C13_answer_open',
    '$PP_C1',
    '$PP_C2',
    '$PP_C3',
    '$PP_C3_other',
    '$PP_C4',
    '$PP_C4_other',
    '$PP_C5',
    '$PP_C5_other',
    '$PP_C6',
    '$PP_C6_other',
    '$PP_C7',
    '$PP_C7_other',
    '$PP_C8',
    '$PP_C9',
    '$PP_C10',
    '$PP_C11',
    '$PP_C12',
    '$PP_C12_answer_open',
    '$PP_C13',
    '$PP_C13_answer_open',
    '$PM_C1',
    '$PM_C2',
    '$PM_C3',
    '$PM_C3_other',
    '$PM_C4',
    '$PM_C4_other',
    '$PM_C5',
    '$PM_C5_other',
    '$PM_C6',
    '$PM_C6_other',
    '$PM_C7',
    '$PM_C7_other',
    '$PM_C8',
    '$PM_C9',
    '$PM_C10',
    '$PM_C11',
    '$PM_C12',
    '$PM_C12_answer_open',
    '$PM_C13',
    '$PM_C13_answer_open',
    '$D1',
    '$D1_answer_open',
    '$D2',
    '$D2_answer_open',
    '$D3',
    '$D3_answer_open',
    '$D4',
    '$D4_answer_open',
    '$D5',
    '$D5_other',
    '$D6_answer_open',
    '$E1',
    '$E1_other',
    '$E2',
    '$E3',
    '$E3_other',
    '$E4'
)";

if ($result = mysqli_query($conn, $sql)) {
    echo "New record created successfully\r\n";
   } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
   }
   
   
   $conn->close();
   
   echo "SUCCESS\r\n";
   http_response_code(200)


?>