<!DOCTYPE html>
<html lang="en">
<?php include 'head.php'; ?>
<body>
 <?php include 'header.php'; ?>
<?php
$json_data = file_get_contents("getEmployees.json");
$decoded_json_data = json_decode($json_data, true); //true returns the decoded data as an array, default will retrun an object
$employees = $decoded_json_data['employees'];

?>

  <main>
<div class="container">
  <div class="row">
  <?php   if(count($employees) != 0){
            foreach ($employees as $employee) {
               ?>
    <div class="col m-3">
      <section class="mx-auto my-5" style="max-width: 35rem;">
      <div id="employee-<?php echo $employee['id']; ?>" class="card testimonial-card mt-2 mb-3 ">
        <div class="card-up day-to-night-gradient">
            <div class="day-to-night-icon-container-list">
              <i class="fa-solid fa-mug-saucer early-morning"></i>
              <i class="fa-regular fa-sun mid-morning"></i>
              <i class="fa-solid fa-sun afternoon"></i>
              <i class="fa-solid fa-martini-glass evening"></i>
              <i class="fa-regular fa-moon night"></i>
            </div>
        </div>
        <div class="avatar mx-auto white">
        <img id="employee-image-<?php echo $employee['id']; ?>" class="img-fluid rounded-circle" src="<?php echo $employee['image'] ? $employee['image'] : '/_assets/default_avatar.png' ; ?>" alt="Card image cap">
            </div>
            <div class="card-body">
              <h5 id="employee-name-<?php echo $employee['id']; ?>" class="card-title text-center"></h5>
            </div>
            <ul class="list-group list-group-flush">
              <li id="time-zone-<?php echo $employee['id']; ?>" class="list-group-item">Time Zone: </li>
              <li id="current-time-<?php echo $employee['id']; ?>" class="list-group-item">Current Time:</li>
              <li id="working-hours-<?php echo $employee['id']; ?>" class="list-group-item">Typical Working Hours:</li>
            </ul>
            <div class="card-body">
                <a href="/editEmployee.php" id="edit-user-<?php echo $employee['id']; ?>" class="card-link" onClick="send_user_id(this.id)">Edit User Information</a>
                <a href="" class="card-link" id="email1">Message User</a>
            </div>
          </div>
          </section>
          </div>
              <?php
    }
  }
  ?>
<!--
    <div class="col m-3">
       <section class="mx-auto my-5" style="max-width: 35rem;">
      <div id="employee-two" class="card testimonial-card mt-2 mb-3 ">
        <div class="card-up day-to-night-gradient">
          <div class="day-to-night-icon-container-list">
              <i class="fa-solid fa-mug-saucer early-morning"></i>
              <i class="fa-regular fa-sun mid-morning"></i>
              <i class="fa-solid fa-sun afternoon"></i>
              <i class="fa-solid fa-martini-glass evening"></i>
              <i class="fa-regular fa-moon night"></i>
          </div>

        </div>
        <div class="avatar mx-auto white">
        <img id="employee-image" class="img-fluid rounded-circle" src="_assets/employee2.jpg" alt="Card image cap">
        </div>
        <div class="card-body">
        <h5 id="second-employee-name" class="card-title text-center"></h5>
        </div>
        <ul class="list-group list-group-flush">
        <li id="time-zone-2" class="list-group-item">Time Zone: </li>
        <li id="current-time-2" class="list-group-item">Current Time:</li>
        <li id="working-hours-2" class="list-group-item">Typical Working Hours:</li>
        </ul>
        <div class="card-body">
          <a href="/editEmployee.php" id="edit-user-2" class="card-link" onClick="send_user_id(this.id)">Edit User Information</a>
          <a href="" class="card-link" id="email2">Message User</a>

        </div>
      </div>
</section>
      </div>

        <div class="col m-3">
           <section class="mx-auto my-5" style="max-width: 35rem;">
            <div id="employee-three" class="card testimonial-card mt-2 mb-3 ">
              <div class="card-up day-to-night-gradient">
                 <div class="day-to-night-icon-container-list">
                  <i class="fa-solid fa-mug-saucer early-morning"></i>
                  <i class="fa-regular fa-sun mid-morning"></i>
                  <i class="fa-solid fa-sun afternoon"></i>
                  <i class="fa-solid fa-martini-glass evening"></i>
                  <i class="fa-regular fa-moon night"></i>
                </div>
              </div>
              <div class="avatar mx-auto white">
               <img id="employee-image" class="img-fluid rounded-circle" src="_assets/employee3.jpg" alt="Card image cap">
              </div>
               <div class="card-body">
          <h5 id="third-employee-name" class="card-title text-center"></h5>
            </div>
            <ul class="list-group list-group-flush">
              <li id="time-zone-3" class="list-group-item">Time Zone: </li>
              <li id="current-time-3" class="list-group-item">Current Time:</li>
              <li id="working-hours-3" class="list-group-item">Typical Working Hours:</li>
            </ul>
            <div class="card-body">
              <a href="/editEmployee.php" id="edit-user-3" class="card-link" onClick="send_user_id(this.id)">Edit User Information</a>
              <a href="" class="card-link" id="email3">Message User</a>

            </div>
          </div>
</section>
        </div> -->

      <!--End row-->
      </div>
<!--End Container-->
  </div>


  </main>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
<?php include "footer.php" ?>
</html>
