<!DOCTYPE html>
<html lang="en">
<?php include 'head.php'; ?>

<body>
  <?php include 'header.php'; ?>
  <?php
  $json_data = file_get_contents("getMeetings.json");
  $decoded_json_data = json_decode($json_data, true); //true returns the decoded data as an array, default will retrun an object
  $meetings = $decoded_json_data['meetings'];
  ?>

  <main>
    <div class="container">
      <div class="row">
        <?php if (count($meetings) != 0) {
          foreach ($meetings as $meeting) {
            ?>
            <!-- NEED TO ADJUST FOR MEETING DATASETS -->
            <div class="col-4">
              <!-- <section class="mx-auto my-5" style="max-width: 35rem;"> -->
              <div id="meeting-<?php echo $meeting['id']; ?>" class="card testimonial-card mt-2 mb-3 ">
                <div class="card-up night-to-day-gradient">
                  <!-- <div class="day-to-night-icon-container-list">
                    <i class="fa-solid fa-mug-saucer early-morning"></i>
                    <i class="fa-regular fa-sun mid-morning"></i>
                    <i class="fa-solid fa-sun afternoon"></i>
                    <i class="fa-solid fa-martini-glass evening"></i>
                    <i class="fa-regular fa-moon night"></i> -->
                  <!-- </div> -->
                </div>
                <div class="card-body">
                  <h5 id="meeting-title-<?php echo $meeting['id']; ?>" class="card-title text-center"></h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li id="meeting-datetime-<?php echo $meeting['id']; ?>" class="list-group-item">Date/Time: </li>
                  <li id="meeting-attendees-<?php echo $meeting['id']; ?>" class="list-group-item">Attendees:</li>
                  <li id="meeting-location-<?php echo $meeting['id']; ?>" class="list-group-item">Location:</li>
                  <li id="meeting-id-<?php echo $meeting['id']; ?>" class="list-group-item">Meeting Id:</li>
                      <!--Add description but with a hover/popup for full description details -->
                    </ul>
                    <form action="deleteMeeting.php" method="post">

<input type="hidden" name="id" value="<?php echo $id; ?>">

                          <input type="submit" name="delete" value="Delete">

                        </form>
                        <button class="btn btn-danger btn-sm delete" data-id="<?php echo $meeting['id'];?>">Delete</button>
                      </div>
                      <!-- </section> -->
                    </div>
            <?php
          }
        }
        ?>
        <!--End row-->
      </div>
      <!--End Container-->
    </div>


  </main>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
</body>
<?php include "footer.php" ?>

</html>
