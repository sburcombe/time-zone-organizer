<!DOCTYPE html>

<html lang="eng">
 <?php include('head.php') ?>

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
              <a class="nav-link" aria-current="page" href="/time-zone-organizer/index.php">Home/Employee List</a>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Employee List</a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/time-zone-organizer/addEmployee.php">Add Employee</a>
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
        <div id="time-wrapper" class="container">
          <h2>Current Date and Time</h2>
          <div id="time-holder" class = "row">
            <div class="col-sm">
              <h3>GMT: </h3>
              <span id="gmt"></span>
            </div>
            <div class = "col-sm">
              <h3>CST: </h3>
              <span id="cst"></span>
            </div>
            <div class="col-sm">
              <h3>EST: </h3>
              <span id="est"></span>
            </div>
            <div class="col-sm">
              <h3>MST: </h3>
              <span id="mst"></span>
            </div>
          </div>
        </div>
    </div>
    <!-- Jumbotron -->
  </header>

  <div class="container">
    <section class="mx-auto my-5" style="max-width: 35rem;">
      <div class="card testimonial-card mt-2 mb-3">
        <div class="card-up aqua-gradient"></div>
        <div class="avatar mx-auto white">
        <img id="employee-image" class="img-fluid rounded-circle" src="" alt="Card image cap">
        </div>
        <div class="card-body ">
          <h4 class="card-title text-center">Edit Employee</h4>
          <form action="" id="edit-employee-form">
            <div class="form-group">
              <label>Name: </label>
              <input id="employee-name" class="form-control">
              </input>


              <label>Time Zone: </label>
              <input id="time-zone" class="form-control"> </input>
              <label>Current Time: </label>
              <input id="current-time" class="form-control"></input>
              <label> Typical Working Hours: </label>
              <input id="working-hours" class="form-control"></input>
              <label> Employee Image: </label>
              <input type="file" class="form-control-file" id="employee-image">

              <div class="card-body">
                <button href="/time-zone-organizer/index.php" id="cancel" class="btn btn-secondary mb-2">Cancel</button>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
              </div>
            </div>
          </form>
        </div>
        </section>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>
