<?php
//NEED TO UPDATE THIS FILE.... JUST A PLACEHOLDER

// path and name of the file
$employeefiletxt = 'getEmployees.json';
$meetingfiletxt = "getMeetings.json";

$meeting_arr_data = array();

if(file_exists($meetingfiletxt) && isset($_POST['delete'])) {
        // gets json-data from file
          $meetingjsondata = file_get_contents($meetingfiletxt);

          // converts json string into array
          $meeting_arr_data = json_decode($meetingjsondata, true);
          // var_dump(['Meeting Array before: ', $meeting_arr_data]);
          $meetings = $meeting_arr_data['meetings'];
          for ($i = 0; $i < count($meetings); $i++){

            if ($_POST['id'] == $meetings[$i]['id']){
              // var_dump($meeting);
              // die();
              unset($meetings[$i]);
            }

            // var_dump($key);
            // die();
          }

          $meeting_arr_data['meetings'] = $meetings;


//need to update meetings at this point.....
          $updated_meeting_data = $meeting_arr_data;

          var_dump($updated_meeting_data);

  // rebase array
  // $updated_meeting_data = array_values($updated_meeting_data);


  // saves the json string in "formdata.txt" (in "dirdata" folder)
  // outputs error message if data cannot be saved
  if (file_put_contents('getMeetings.json', json_encode($updated_meeting_data))) {
    echo 'Data successfully saved';
    header("Location:http://localhost:8888/meetings.php");
  } else {
    echo 'Unable to save data in "getMeetings.json"';
  }

}


?>
