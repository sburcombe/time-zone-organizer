<!DOCTYPE html>

<html lang="eng">

<?php include 'head.php'; ?>

<?php include 'header.php'; ?>

<div class="container">
  <div class="card-body ">
    <h4 class="card-title text-center">Schedule Meeting</h4>
    <form enctype="multipart/form-data" action="saveMeeting.php" id="schedule-meeting-form" method="POST">
      <div class="form-group">
        <input type="hidden" name="schedule-meeting-form" value='true' />
        <label>Meeting Title: </label>
        <input name="meeting-title" id="meeting-title" class="form-control">
        </input>


        <!-- <label>Date/Time: </label>
        <input name="date-time" id="date-time" class="form-control"> </input> -->
        <dropdown>
  <input id="toggle1" type="checkbox" checked>
  <label for="toggle1" class="animate">Select Dates<i class="fa fa-bars float-right"></i></label>
  <ul class="animate">

<!-- calendar  -->
<h1 class="center"></h1>
<div class="calendar">
  <div class="group">
    <p class="left pointer minusmonth">&laquo;</p>
    <p class="left monthname center pointer"></p>
    <p class="right pointer addmonth">&raquo;</p>
  </div>
  <select name="date">
  <ul class="group">
    <option value="Monday1st"><li value="">Mo</li></option>
    <option value="Tuesday2nd"><li value="">Tu</li></option>
    <option value="Wednesday3rd"><li value="">We</li></option>
    <option value="Thursday4th"><li value="">Th</li></option>
    <option value="Friday5th"><li value="">Fr</li></option>
    <option value="Saturday"><li value="">Sa</li></option>
    <option value="Sunday"><li value="">Su</li></option>
  </ul>
  <select>
</div>

  </ul>
</dropdown>

        <!-- <label> Attendees: </label>
        <input name="meeting-attendees" id="meeting-attendees" class="form-control"> -->
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Attendees
  </button>
  <select name="meeting-attendees" id="meeting-attendees" class="dropdown-menu form-control" aria-labelledby="dropdownMenuButton">
    <option class="dropdown-item" value="Name 1" href="#">Name 1</option>
    <option class="dropdown-item" value="Name 2" href="#">Name 2</option>
    <option class="dropdown-item" value="Name 3" href="#">Name 3</option>
</select>
</div>
      </input>
        <label> Description: </label>
        <input name="description" id="description" class="form-control"></input>
         <label> Location: </label>
        <input name="location" id="location" class="form-control"></input>
<label> Attach File (optional): </label>
              <!-- <input type="hidden" name="MAX_FILE_SIZE" value="524288" /> -->
              <input type="file" name="meeting-attached-file" class="form-control-file" id="meeting-attached-file" value="">

        <div class="card-body">
          <button href="/index.php" id="cancel" class="btn btn-secondary mb-2">Cancel</button>
          <button type="submit" class="btn btn-primary mb-2">Create Meeting</button>
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
