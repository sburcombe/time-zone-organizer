<?php
//NEED TO UPDATE THIS FILE.... JUST A PLACEHOLDER

// path and name of the file
$filetxt = 'getEmployees.json';

//update these with new form fields
// check if all form data are submited, else output error message
if (isset($_POST['meeting-tile']) && isset($_POST['date-time']) && isset($_POST['meeting-attendees']) && isset($_POST['description'])) {
  // if form fields are empty, outputs message, else, gets their data
  if (empty($_POST['meeting-title']) || empty($_POST['date-time']) || empty($_POST['meeting-attendees']) || empty($_POST['description'])) {
    echo 'All fields are required';
  } else {

    // path and name of the file
    $filetxt = 'getEmployees.json';
    $arr_data = array(); // to store all form data

    // check if the file exists
    if (file_exists($filetxt)) {
      // gets json-data from file
      $jsondata = file_get_contents($filetxt);

      // converts json string into array
      $arr_data = json_decode($jsondata, true);



//definitely needs to change
      // gets and adds form data into an array
      $formdata = array(
        'id' => count($arr_data['employees']) + 1,
        'name' => $_POST['employee-name'],
        'timezone' => $_POST['time-zone'],
        'workinghours' => $_POST['working-hours'],
        'email' => $_POST['email'],
        'image' => $imagePath
      );





      // appends the array with new form data
      $arr_data['employees'][] = $formdata;

    // encodes the array into a string in JSON format (JSON_PRETTY_PRINT - uses whitespace in json-string, for human readable)
    $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

    // saves the json string in "formdata.txt" (in "dirdata" folder)
    // outputs error message if data cannot be saved
    if (file_put_contents('getEmployees.json', $jsondata)) {
      echo 'Data successfully saved';
      header("Location:http://localhost:8888/index.php");
    } else
      echo 'Unable to save data in "getEmployees.json"';
  }
} else
  echo 'Form fields not submited';
?>
