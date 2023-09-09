<!DOCTYPE html>
<html lang="en">
<?php include 'head.php'; ?>
<body>

<header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/index.php">Home/Employee List</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Employee List</a> -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/addEmployee.php">Add Employee</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Schedule a Meeting</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->

  <!-- Jumbotron -->
  <div class="p-5 text-center bg-light">
    <h1 class="mb-3">Time Zone Organizer</h1>
    <h4 class="mb-3">Remember your colleagues time zone without the mental calculations</h4>
    <a class="btn btn-primary" href="" role="button">Try it now!</a>
  </div>
  <!-- Jumbotron -->
</header>

  <main>
<div class="container">
  <div class="row">
    <div class="col m-3">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top user-image" src="_assets/employee1.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Employee 1:</h5>
          <p id="first-employee-name" class="card-text">
            Name:
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li id="time-zone-1" class="list-group-item">Time Zone: </li>
          <li id="current-time-1" class="list-group-item">Current Time:</li>
          <li id="working-hours-1" class="list-group-item">Typical Working Hours:</li>
        </ul>
        <div class="card-body">
            <a href="/editEmployee.php" id="edit-user-1" class="card-link" onClick="send_user_id(this.id)">Edit User Information</a>
            <a href="" class="card-link" id="email1">Message User</a>
        </div>
      </div>
      </div>

    <div class="col m-3">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top user-image" src="_assets/employee2.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Employee 2:</h5>
          <p id="second-employee-name" class="card-text">
            Name:
          </p>
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
      </div>

        <div class="col m-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top user-image" src="_assets/employee3.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Employee 3:</h5>
              <p id="third-employee-name" class="card-text">
                Name:
              </p>
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
        </div>

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
</html>
