<?php
//NEED TO UPDATE THIS FILE.... JUST A PLACEHOLDER

// path and name of the file
$employeefiletxt = 'getEmployees.json';
$meetingfiletxt = "getMeetings.json";

$meeting_arr_data = array();

if(file_exists($meetingfiletxt)) {
        // gets json-data from file
          $meetingjsondata = file_get_contents($meetingfiletxt);

          // converts json string into array
          $meeting_arr_data = json_decode($meetingjsondata, true);
}


?>
