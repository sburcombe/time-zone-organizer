<!DOCTYPE html>

<html lang="eng">
<?php include 'head.php'; ?>

 <?php include 'header.php'; ?>

  <div class="container">
    <section class="mx-auto my-5" style="max-width: 35rem;">
      <div class="card testimonial-card mt-2 mb-3">
        <div class="card-up day-to-night-gradient">
                            <div class="day-to-night-icon-container">
<i class="fa-solid fa-mug-saucer early-morning"></i>
<i class="fa-regular fa-sun mid-morning"></i>
<i class="fa-solid fa-sun afternoon"></i>
<i class="fa-solid fa-martini-glass evening"></i>
<i class="fa-regular fa-moon night"></i>
</div>
        </div>
        <div class="avatar mx-auto white">
        <img id="employee-image" class="img-fluid rounded-circle" src="" alt="Card image cap">
        </div>
        <div class="card-body ">
          <h4 class="card-title text-center">Edit Employee</h4>
          <form enctype="multipart/form-data" action="saveEmployeeInfo.php" id="edit-employee-form" method="POST">
            <div class="form-group">
                            <input type="hidden" name="edit-employee-form" value='true' />
                            <input type="hidden" name="employee-id" id="employee-id" value='' />
              <label>Employee Name: </label>
              <input name="employee-name" id="employee-name" class="form-control">
              </input>


              <label>Time Zone: </label>
              <input name="time-zone" id="time-zone" class="form-control"> </input>
              <label> Typical Working Hours: </label>
              <input name="working-hours" id="working-hours" class="form-control"></input>
              <label> Email: </label>
              <input name="email" id="email" class="form-control"></input>
              <label> Employee Image: </label>
              <input name="employee-image"type="file" class="form-control-file" id="employee-image">

              <div class="card-body">
                <button href="/index.php" id="cancel" class="btn btn-secondary mb-2">Cancel</button>
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
<?php include "footer.php" ?>
      </html>
