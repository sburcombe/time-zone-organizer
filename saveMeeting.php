<?php
//NEED TO UPDATE THIS FILE.... JUST A PLACEHOLDER

// path and name of the file
// $employeefiletxt = 'getEmployees.json';
$meetingfiletxt = "getMeetings.json";

//update these with new form fields
// check if all form data are submited, else output error
//&& isset($_POST['date-time']) && isset($_POST['meeting-attendees']) for when I have these forms correctly connected
// empty($_POST['date-time']) || empty($_POST['meeting-attendees']) ||
if (isset($_POST['meeting-title']) && isset($_POST['description']) && isset($_POST['location'])) {
  // if form fields are empty, outputs message, else, gets their data
  if (empty($_POST['meeting-title']) || empty($_POST['description']) || empty($_POST['location'])) {
    echo 'All fields are required';
  } else {

    // path and name of the file
    // $employeefiletxt = 'getEmployees.json';
    $meetingfiletxt = "getMeetings.json";

    ///need to adjusg for both files
    $employee_arr_data = array(); // to store all form data
    $meeting_arr_data = array();
    // check if the file exists
    if (file_exists($employeefiletxt)) {
      // gets json-data from file
      $employeejsondata = file_get_contents($employeefiletxt);

      // converts json string into array
      $employee_arr_data = json_decode($employeejsondata, true);



//definitely needs to change
      // gets and adds form data into an array
      $formdata = array(
        'id' => count($employee_arr_data['employees']) + 1,
        'name' => $_POST['employee-name'],
        'timezone' => $_POST['time-zone'],
        'workinghours' => $_POST['working-hours'],
        'email' => $_POST['email'],
        'image' => $imagePath
      );





      // appends the array with new form data
      $employee_arr_data['employees'][] = $formdata;

    // encodes the array into  a string in JSON format (JSON_PRETTY_PRINT - uses whitespace in json-string, for human readable)
    $employeejsondata = json_encode($employee_arr_data, JSON_PRETTY_PRINT);

    // saves the json string in "formdata.txt" (in "dirdata" folder)
    // outputs error message if data cannot be saved
              if (file_put_contents('getEmployees.json', $employeejsondata)) {
                echo 'Data successfully saved';
                header("Location:http://localhost:8888/index.php");
              } else{
                echo 'Unable to save data in "getEmployees.json"';
            }
      }elseif(file_exists($meetingfiletxt)) {
        // gets json-data from file
          $meetingjsondata = file_get_contents($meetingfiletxt);

          // converts json string into array
          $meeting_arr_data = json_decode($meetingjsondata, true);

          //gets and adds form data into an array
          $formdata = array(
            'id' => count($employee_arr_data['employees']) + 1,
              'title' => $_POST['meeting-title'],
              'datetime' => '3:00',
              'attendeees' => 'george and sara',
              'description' => $_POST['description'],
              'location' => $_POST['location']
          );

              // appends the array with new form data
          $meeting_arr_data['meetings'][] = $formdata;

        // encodes the array into  a string in JSON format (JSON_PRETTY_PRINT - uses whitespace in json-string, for human readable)
        $meetingjsondata = json_encode($meeting_arr_data, JSON_PRETTY_PRINT);

        // saves the json string in "formdata.txt" (in "dirdata" folder)
        // outputs error message if data cannot be saved
        if (file_put_contents('getMeetings.json', $meetingjsondata)) {
          echo 'Data successfully saved';
          header("Location:http://localhost:8888/index.php");
        } else{
          echo 'Unable to save data in "getMeetings.json"';
      }
    }
  }
  }else{
        echo 'Form fields not submited';
      }


?>
