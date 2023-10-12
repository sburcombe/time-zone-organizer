<!DOCTYPE html>

<html lang="eng">

<?php include 'head.php'; ?>

<?php include 'header.php'; ?>

<div class="container">
 <div class="card-body ">
          <h4 class="card-title text-center">Add Employee</h4>
          <form enctype="multipart/form-data" action="saveEmployeeInfo.php" id="add-employee-form" method="POST">
            <div class="form-group">
              <label>Name: </label>
              <input name="employee-name" id="employee-name" class="form-control">
              </input>


              <label>Time Zone: </label>
              <input name="time-zone" id="time-zone" class="form-control"> </input>
              <label> Typical Working Hours: </label>
              <input name="working-hours" id="working-hours" class="form-control"></input>
               <label> Email: </label>
              <input name="email" id="email" class="form-control"></input>
              <label> Employee Image: </label>
              <!-- <input type="hidden" name="MAX_FILE_SIZE" value="524288" /> -->
              <input type="file" name="employee-image" class="form-control-file" id="employee-image" value="">

              <div class="card-body">
                <button href="/index.php" id="cancel" class="btn btn-secondary mb-2">Cancel</button>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
              </div>
            </div>
          </form>
        </div>
  </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<?php include "footer.php" ?>

</html>
