 <header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white day-to-night-gradient">
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
      <h1 class="mb-3 header-title">SoLuna</h1>
      <h4 class="mb-3">Remember your colleagues time zone without the mental calculations</h4>
      <a class="btn btn-primary" href="" role="button">Try it now!</a>
        <!-- <div id="time-wrapper" class="container"> -->
          <div id="time-wrapper">
          <h2>Current Date and Time</h2>
          <div id="time-holder" class = "row">
            <!-- <div class="col-sm container">
              <h3 class= "row justify-content-md-center">GMT: </h3>
              <div class = "row justify-content-md-center"id="gmt"></div>
            </div> -->
              <div class = "col-sm container">
              <h3 class = "row justify-content-center">CET: </h3>
              <div class ="row justify-content-center"id="cet-date"></div>
              <div class = "row justify-content-center " id="cet-time"></div>
            </div>
            <div class = "col-sm container">
              <h3 class = "row justify-content-center">CST: </h3>
              <div class ="row justify-content-center"id="cst-date"></div>
              <div class = "row justify-content-center " id="cst-time"></div>
            </div>
            <div class="col-sm container">
              <h3 class="row justify-content-center">EST: </h3>
              <div class="row justify-content-center" id="est-date"></div>
              <div class="row justify-content-center" id="est-time"></div>
            </div>
            <div class="col-sm container">
              <h3 class="row justify-content-center">MST: </h3>
              <div class="row justify-content-center" id="mst-date"></div>
              <div class="row justify-content-center" id="mst-time"></div>
            </div>
              <div class = "col-sm container">
              <h3 class = "row justify-content-center">PST: </h3>
              <div class ="row justify-content-center"id="pst-date"></div>
              <div class = "row justify-content-center " id="pst-time"></div>
            </div>
          </div>
        </div>


<!-- This example uses <i> element with:
1. the `fa-solid` style class for solid style
2. the `user` icon with the `fa-` prefix -->
<!-- <div class="day-to-night-icon-container">
<i class="fa-solid fa-mug-saucer early-morning"></i>
<i class="fa-regular fa-sun mid-morning"></i>
<i class="fa-solid fa-sun afternoon"></i>
<i class="fa-solid fa-martini-glass evening"></i>
<i class="fa-regular fa-moon night"></i>
<i class="fi fi-rr-square-right"></i>
</div> -->

<!-- Or you can use a <span> element, with classes applied in the same way -->
            <!-- <div class="day-cycle">
              <div class="low-sunrise-container">
                <div class="low-sunrise"></div>
              </div>
              <div class="high-sunrise-container">
                <div class="high-sunrise"></div>
                <div class="high-sunrise-ray-1"></div>
                <div class="high-sunrise-ray-2"></div>
                <div class="high-sunrise-ray-3"></div>
                <div class="high-sunrise-ray-4"></div>
                <div class="high-sunrise-ray-5"></div>
              </div>
              <div class="sun"></div>
              <div class="sunset"></div>
              <div class="moon"></div>
              <div class="sky"></div>
            </div> -->
    <script src="script.js"></script>    </div>
    <!-- Jumbotron -->
  </header>
