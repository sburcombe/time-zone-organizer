
//Times
//get Date time and save in specific time zones
var date = new Date();

//AST
var ASTdate = new Date().toLocaleString("en-US", { timeZone: "America/Anguilla" });

//EST
var ESTdate = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

//CST
var CSTdate = new Date().toLocaleString("en-US", { timeZone: "America/Belize" });

//MST
var MSTdate = new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" });

//PST
var PSTdate = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });

//AKST
var AKSTdate = new Date().toLocaleString("en-US", { timeZone: "America/Adak" });


//This function is called when a user clicks to edit user information from the details list


function send_user_id(clicked_id) {
  // alert(clicked_id);
  localStorage.setItem('clickedId', clicked_id)

}
getEmployees();

var employees;

function getEmployees() {
  console.log("line 38");
  fetch("./getEmployees.json")
    .then((res) => {
      return res.json();
    })

    .then((data) => employees = data);

}



// var employeeOne = employees["employees"][0];

// var employeeTwo = employees["employees"][1];
// var employeeThree = employees["employees"][2];


window.addEventListener('load', function (event) {
  console.log("employees 91: ", employees);
  // debugger;
  var employeeOne = employees["employees"][0];

var employeeTwo = employees["employees"][1];
var employeeThree = employees["employees"][2];
  //display only the user that you've selected
  if (window.location.href.includes('editEmployee')) {

    var clickedId = localStorage.getItem('clickedId');

    var employeeNameSpace = document.querySelector("#employee-name");
    var employeeTimeZone = document.querySelector("#time-zone");
    var employeeCurrentTime = document.querySelector("#current-time");
    var employeeWorkingHours = document.querySelector("#working-hours");
    var employeeImage = document.querySelector("#employee-image");
    console.log(clickedId);
    //need to come back and adjust for dynamic retrieval of id and timezone
    if (clickedId == 'edit-user-1'){

      $('#employee-name').attr('placeholder', employeeOne["name"]);
      //Display Employee TimeZones
      $('#time-zone').attr('placeholder', employeeOne["timezone"]);
      //Display Employee Current Times
      getCurrentTimes();
      console.log("user current time: ", employeeOne["currenttime"]);
      $('#current-time').attr('placeholder', employeeOne["currenttime"]);
      //Display Employee Working Hours
      $('#working-hours').attr('placeholder', employeeOne["workinghours"]);

      employeeImage.src = employeeOne["image"];

  } else if (clickedId == 'edit-user-2') {

      $('#employee-name').attr('placeholder', employeeTwo["name"]);
    //Display Employee TimeZones
      $('#time-zone').attr('placeholder', employeeTwo["timezone"]);
    //Display Employee Current Times
    getCurrentTimes();
    $('#current-time').attr('placeholder', employeeTwo["currenttime"]);
    //Display Employee Working Hours
    $('#working-hours').attr('placeholder', employeeTwo["workinghours"]);

      employeeImage.src = employeeTwo["image"];

  } else if (clickedId == 'edit-user-3') {

      $('#employee-name').attr('placeholder', employeeThree["name"]);
      //Display Employee TimeZones
      $('#time-zone').attr('placeholder', employeeThree["timezone"]);
      //Display Employee Current Times
      getCurrentTimes();
      $('#current-time').attr('placeholder', employeeThree["currenttime"]);
      //Display Employee Working Hours
      $('#working-hours').attr('placeholder', employeeThree["workinghours"]);

      employeeImage.src = employeeThree["image"];

  }
}

//Display employee Details

  if (employeeOne && document.querySelector("#first-employee-name")) {
//Display Employee names
  var employeeOneNameSpace = document.querySelector("#first-employee-name");
  employeeOneNameSpace.innerHTML = employeeOne["name"];

  //Display Employee TimeZones
  var employeeOneTimeZone = document.querySelector("#time-zone-1");
  employeeOneTimeZone.innerHTML = "Time Zone: " + employeeOne["timezone"];

  //Display Employee Current Times
  getCurrentTimes();

  var employeeOneCurrentTime = document.querySelector("#current-time-1");
  employeeOneCurrentTime.innerHTML = "Current Time: " + employeeOne["currenttime"];

  //Display Employee Working Hours
  var employeeOneWorkingHours = document.querySelector("#working-hours-1");
  employeeOneWorkingHours.innerHTML = "Working Hours: " + employeeOne["workinghours"];

  //Connect Email Addresses to Message Button
  var employeeOneEmailElement = document.querySelector("#email1");
  var employeeOneEmail = "mailto:" + employeeOne['email'];
  $(employeeOneEmailElement).attr("href", employeeOneEmail);

}
  if (document.querySelector("#second-employee-name")) {
      //Display Employee names
    var employeeTwoNameSpace = document.querySelector("#second-employee-name");
    employeeTwoNameSpace.innerHTML = employeeTwo["name"];
  //Display Employee TimeZones
    var employeeTwoTimeZone = document.querySelector("#time-zone-2");
    employeeTwoTimeZone.innerHTML = "Time Zone: " + employeeTwo["timezone"];
  //Display Employee Current Times
    getCurrentTimes();

    var employeeTwoCurrentTime = document.querySelector("#current-time-2");
    employeeTwoCurrentTime.innerHTML = "Current Time: " +  employeeTwo["currenttime"];
  //Display Employee Working Hours
    var employeeTwoWorkingHours = document.querySelector("#working-hours-2");
    employeeTwoWorkingHours.innerHTML = "Working Hours: " +  employeeTwo["workinghours"];
  //Connect Email Addresses to Message Button
    var employeeTwoEmailElement = document.querySelector("#email2");
    var employeeTwoEmail = "mailto:" + employeeTwo['email'];
    $(employeeTwoEmailElement).attr("href", employeeTwoEmail);

  }

  if (document.querySelector("#third-employee-name")) {
    //Display Employee Name
    var employeeThreeNameSpace = document.querySelector("#third-employee-name");
    employeeThreeNameSpace.innerHTML = employeeThree["name"];

    //Display Employee TimeZones
    var employeeThreeTimeZone = document.querySelector("#time-zone-3");
    employeeThreeTimeZone.innerHTML = "Time Zone: " + employeeThree["timezone"];

    //Display Employee Current Times
    getCurrentTimes();
    var employeeThreeCurrentTime = document.querySelector("#current-time-3");
    employeeThreeCurrentTime.innerHTML = "Current Time: " +  employeeThree["currenttime"];

    //Display Employee Working Hours
    var employeeThreeWorkingHours = document.querySelector("#working-hours-3");
    employeeThreeWorkingHours.innerHTML = "Working Hours: " +  employeeThree['workinghours'];

    //Connect Email Addresses to Message Button
    var employeeThreeEmailElement = document.querySelector("#email3");
    var employeeThreeEmail = "mailto:" + employeeThree['email'];
    $(employeeThreeEmailElement).attr("href", employeeThreeEmail);
  }

});

function getCurrentTimes() {
  //get Date time and save in specific time zones
// console.log("line 195");
  var employeeOne = employees["employees"][0];

  var employeeTwo = employees["employees"][1];
  var employeeThree = employees["employees"][2];


  ///need an array of the employee list to loop through and then dynamically generate these items (including the check for current time)
 //logic needs to be consolidated for use (i.e. is mid-morning have one space where all the logic is worked out and then in these conditional checks
 //just check for isMidMorning value);
  if (employeeOne['timezone'] == "PST" && document.querySelector("#first-employee-name") || employeeOne['timezone'] == "PST" && localStorage.getItem('clickedId') == 'edit-user-1') {
// console.log("line 206");
    employeeOne["currenttime"] = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
    if (employeeOne["currenttime"][0] >= 6 && employeeOne["currenttime"][0] <= 9 && employeeOne["currenttime"].includes('AM')){
      //change icon opacity for 6am -9:59 am
      $('#employee-one .early-morning').css('opacity', '100');
      $('#employee-one .mid-morning').css('opacity', '0.3');
      $('#employee-one .afternoon').css('opacity', '0.3');
      $('#employee-one .evening').css('opacity', '0.3');
      $('#employee-one .night').css('opacity', '0.3');
    } if ((employeeOne["currenttime"][0] == 1 && employeeOne["currenttime"][1] <= 1 && employeeOne["currenttime"].includes('AM')) ||
      (employeeOne["currenttime"][0] <= 5 && employeeOne["currenttime"][1] == ":" && employeeOne["currenttime"].includes('PM')) ||
      (employeeOne["currenttime"][0] == 1 && employeeOne["currenttime"][1] == 2) && employeeOne["currenttime"].includes('PM')) {
        //change icon opacity for 10am-12:59 pm
      $('#employee-one .early-morning').css('opacity', '0.3');
      $('#employee-one .mid-morning').css('opacity', '100');
      $('#employee-one .afternoon').css('opacity', '0.3');
      $('#employee-one .evening').css('opacity', '0.3');
      $('#employee-one .night').css('opacity', '0.3');
    } if (employeeOne["currenttime"][0] >= 2 && employeeOne["currenttime"][0] <= 5 && employeeOne["currenttime"].includes('PM')){
      //change icon opacity for 1pm-5:59 pm
      $('#employee-one .early-morning').css('opacity', '0.3');
      $('#employee-one .mid-morning').css('opacity', '0.3');
      $('#employee-one .afternoon').css('opacity', '100');
      $('#employee-one .evening').css('opacity', '0.3');
      $('#employee-one .night').css('opacity', '0.3');
    } if (employeeOne["currenttime"][0] >= 6 && employeeOne["currenttime"][0] <= 9 && employeeOne["currenttime"].includes('PM')) {
      //change icon opacity for 6pm-9:59 pm
      $('#employee-one .early-morning').css('opacity', '0.3');
      $('#employee-one .mid-morning').css('opacity', '0.3');
      $('#employee-one .afternoon').css('opacity', '0.3');
      $('#employee-one .evening').css('opacity', '100');
      $('#employee-one .night').css('opacity', '0.3');
    } if ((employeeOne["currenttime"][0] == 1 && employeeOne["currenttime"][1] <= 1 && employeeOne["currenttime"].includes('PM')) ||
      (employeeOne["currenttime"][0] <= 5 && employeeOne["currenttime"][1] == ':' && employeeOne["currenttime"].includes('AM')) ||
      (employeeOne["currenttime"][0] == 1 && employeeOne["currenttime"][1] == 2) && employeeOne["currenttime"].includes('AM')) {
      //change icon opacity for 10pm-5:59 am
      $('#employee-one .early-morning').css('opacity', '0.3');
      $('#employee-one .mid-morning').css('opacity', '0.3');
      $('#employee-one .afternoon').css('opacity', '0.3');
      $('#employee-one .evening').css('opacity', '0.3');
      $('#employee-one .night').css('opacity', '100');
      }
    // if (document.querySelector("#current-time")) {
    //   document.getElementById('current-time').innerHTML = "Current Time: " + employeeOne["currenttime"];
    // } else if (document.querySelector("#current-time-1")) {
    //   document.getElementById('current-time-1').innerHTML = "Current Time: " + employeeOne["currenttime"];
    // }
  }
  if (employeeTwo['timezone'] == "EST" && document.querySelector("#second-employee-name") || employeeTwo['timezone'] == "EST" && localStorage.getItem('clickedId') == 'edit-user-2') {
    employeeTwo["currenttime"] = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' });;

    if (employeeTwo["currenttime"][0] >= 6 && employeeTwo["currenttime"][0] <= 9 && employeeTwo["currenttime"].includes('AM')) {
      //change icon opacity for 6am -9:59 am
      $('#employee-two .early-morning').css('opacity', '100');
      $('#employee-two .mid-morning').css('opacity', '0.3');
      $('#employee-two .afternoon').css('opacity', '0.3');
      $('#employee-two .evening').css('opacity', '0.3');
      $('#employee-two .night').css('opacity', '0.3');
    } if ((employeeTwo["currenttime"][0] == 1 && employeeTwo["currenttime"][1] <= 1 && employeeTwo["currenttime"].includes('AM')) ||
      (employeeTwo["currenttime"][0] <= 5 && employeeTwo["currenttime"][1] == ":" && employeeTwo["currenttime"].includes('PM')) ||
      (employeeTwo["currenttime"][0] == 1 && employeeTwo["currenttime"][1] == 2) && employeeTwo["currenttime"].includes('PM')) {
      //change icon opacity for 10am-12:59 pm
      $('#employee-two .early-morning').css('opacity', '0.3');
      $('#employee-two .mid-morning').css('opacity', '100');
      $('#employee-two .afternoon').css('opacity', '0.3');
      $('#employee-two .evening').css('opacity', '0.3');
      $('#employee-two .night').css('opacity', '0.3');
    } if (employeeTwo["currenttime"][0] >= 2 && employeeTwo["currenttime"][0] <= 5 && employeeTwo["currenttime"].includes('PM')) {
      //change icon opacity for 1pm-5:59 pm
      $('#employee-two .early-morning').css('opacity', '0.3');
      $('#employee-two .mid-morning').css('opacity', '0.3');
      $('#employee-two .afternoon').css('opacity', '200');
      $('#employee-two .evening').css('opacity', '0.3');
      $('#employee-two .night').css('opacity', '0.3');
    } if (employeeTwo["currenttime"][0] >= 6 && employeeTwo["currenttime"][0] <= 9 && employeeTwo["currenttime"].includes('PM')) {
      //change icon opacity for 6pm-9:59 pm
      $('#employee-two .early-morning').css('opacity', '0.3');
      $('#employee-two .mid-morning').css('opacity', '0.3');
      $('#employee-two .afternoon').css('opacity', '0.3');
      $('#employee-two .evening').css('opacity', '100');
      $('#employee-two .night').css('opacity', '0.3');
    } if ((employeeTwo["currenttime"][0] == 1 && employeeTwo["currenttime"][1] <= 1 && employeeTwo["currenttime"].includes('PM')) ||
      (employeeTwo["currenttime"][0] <= 5 && employeeTwo["currenttime"][1] == ':' && employeeTwo["currenttime"].includes('AM')) ||
      (employeeTwo["currenttime"][0] == 1 && employeeTwo["currenttime"][1] == 2) && employeeTwo["currenttime"].includes('AM')) {
      //change icon opacity for 10pm-5:59 am
      $('#employee-two .early-morning').css('opacity', '0.3');
      $('#employee-two .mid-morning').css('opacity', '0.3');
      $('#employee-two .afternoon').css('opacity', '0.3');
      $('#employee-two .evening').css('opacity', '0.3');
      $('#employee-two .night').css('opacity', '100');
    }

    // if (document.querySelector("#current-time")) {
    //   document.getElementById('current-time').innerHTML = employeeTwo["currenttime"];

    // } else if (document.querySelector("#current-time-2")) {
    //   document.getElementById('current-time-2').innerHTML = "Current Time: " + employeeTwo["currenttime"];
    // }
  }
  if (employeeThree['timezone'] == "MST" && document.querySelector("#third-employee-name") || employeeThree['timezone'] == "MST" && localStorage.getItem('clickedId') == 'edit-user-3') {
    employeeThree["currenttime"] = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Phoenix' });;

    if (employeeThree["currenttime"][0] >= 6 && employeeThree["currenttime"][0] <= 9 && employeeThree["currenttime"].includes('AM')) {
      //change icon opacity for 6am -9:59 am
      $('#employee-three .early-morning').css('opacity', '100');
      $('#employee-three .mid-morning').css('opacity', '0.3');
      $('#employee-three .afternoon').css('opacity', '0.3');
      $('#employee-three .evening').css('opacity', '0.3');
      $('#employee-three .night').css('opacity', '0.3');
    } if ((employeeThree["currenttime"][0] == 1 && employeeThree["currenttime"][1] <= 1 && employeeThree["currenttime"].includes('AM')) ||
      (employeeThree["currenttime"][0] <= 5 && employeeThree["currenttime"][1] == ":" && employeeThree["currenttime"].includes('PM')) ||
      (employeeThree["currenttime"][0] == 1 && employeeThree["currenttime"][1] == 2) && employeeThree["currenttime"].includes('PM')) {
      //change icon opacity for 10am-12:59 pm
      $('#employee-three .early-morning').css('opacity', '0.3');
      $('#employee-three .mid-morning').css('opacity', '100');
      $('#employee-three .afternoon').css('opacity', '0.3');
      $('#employee-three .evening').css('opacity', '0.3');
      $('#employee-three .night').css('opacity', '0.3');
    } if (employeeThree["currenttime"][0] >= 2 && employeeThree["currenttime"][0] <= 5 && employeeThree["currenttime"].includes('PM')) {
      //change icon opacity for 1pm-5:59 pm
      $('#employee-three .early-morning').css('opacity', '0.3');
      $('#employee-three .mid-morning').css('opacity', '0.3');
      $('#employee-three .afternoon').css('opacity', '100');
      $('#employee-three .evening').css('opacity', '0.3');
      $('#employee-three .night').css('opacity', '0.3');
    } if (employeeThree["currenttime"][0] >= 6 && employeeThree["currenttime"][0] <= 9 && employeeThree["currenttime"].includes('PM')) {
      //change icon opacity for 6pm-9:59 pm
      $('#employee-three .early-morning').css('opacity', '0.3');
      $('#employee-three .mid-morning').css('opacity', '0.3');
      $('#employee-three .afternoon').css('opacity', '0.3');
      $('#employee-three .evening').css('opacity', '100');
      $('#employee-three .night').css('opacity', '0.3');
    } if ((employeeThree["currenttime"][0] == 1 && employeeThree["currenttime"][1] <= 1 && employeeThree["currenttime"].includes('PM')) ||
      (employeeThree["currenttime"][0] <= 5 && employeeThree["currenttime"][1] == ':' && employeeThree["currenttime"].includes('AM')) ||
      (employeeThree["currenttime"][0] == 1 && employeeThree["currenttime"][1] == 2) && employeeThree["currenttime"].includes('AM')) {
      //change icon opacity for 10pm-5:59 am
      $('#employee-three .early-morning').css('opacity', '0.3');
      $('#employee-three .mid-morning').css('opacity', '0.3');
      $('#employee-three .afternoon').css('opacity', '0.3');
      $('#employee-three .evening').css('opacity', '0.3');
      $('#employee-three .night').css('opacity', '100');
    }

    // if (document.querySelector("#current-time")) {
    //   document.getElementById('current-time').innerHTML= "Current Time: " + employeeThree["currenttime"];
    // } else if (document.querySelector("#current-time-3")) {
    //   document.getElementById('current-time-3').innerHTML = "Current Time: " + employeeThree["currenttime"];
    // }

  }

setInterval(getCurrentTimes, 1000);
  //sample code for clock display
  function updateClock() {
    // const gmtTime = new Date().toUTCString();

    //Dates
    const cetDate = new Date().toLocaleDateString('nl-NL', {
      timeZone: 'Europe/Berlin', weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"  });
    const cstDate = new Date().toLocaleDateString("en-US", {
      timeZone: "America/Belize", weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"  });
    const estDate = new Date().toLocaleDateString('en-US', {
      timeZone: 'America/New_York', weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"  });
    const mstDate = new Date().toLocaleDateString('en-US', {
      timeZone: 'America/Phoenix', weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"  });
    const pstDate = new Date().toLocaleDateString('en-US', {
      timeZone: 'America/Los_Angeles', weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    //Times
    // const cetTime = "06:52";
// const cstTime = '6:30 PM';
    const cetTime = new Date().toLocaleTimeString('nl-NL', { timeZone: 'Europe/Berlin' });
    const cstTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/Belize"});
    const estTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    const mstTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Phoenix' });
    const pstTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });

    // document.getElementById('gmt').innerHTML = gmtTime;
    document.getElementById('cet-date').innerHTML = cstDate;
    document.getElementById('cst-date').innerHTML = cstDate;
    document.getElementById('est-date').innerHTML = estDate;
    document.getElementById('mst-date').innerHTML = mstDate;
    document.getElementById('pst-date').innerHTML = mstDate;


    document.getElementById('cet-time').innerHTML = cetTime;
    document.getElementById('cst-time').innerHTML = cstTime;
    document.getElementById('est-time').innerHTML = estTime;
    document.getElementById('mst-time').innerHTML = mstTime;
    document.getElementById('pst-time').innerHTML = pstTime;

    //color change for between 6 and 9:59 am
    if (cetTime[0] == 0 && cetTime[1] >= 6 && cetTime[1] <= 9 ) {

      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F8B195');
      $('#cet-time').css('background-color', '#F8B195');
    }
    if (cstTime[0] >= 6 && cstTime[0] <= 9 && cstTime.includes('AM')) {
      //with 80 is including the alpha value to make the color opaque (i.e. #F8B19580)
      // $('#cst-time').css('background-color', '#F8B195');
      $('#cst-time').css('background-color', '#F8B195');
    }
    if (estTime[0] >= 6 && estTime[0] <= 9 && estTime.includes('AM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F8B195');
      $('#est-time').css('background-color', '#F8B195');
    }
    if (mstTime[0] >= 6 && mstTime[0] <= 9 && mstTime.includes('AM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F8B195');
      $('#mst-time').css('background-color', '#F8B195');
    }
    if (pstTime[0] >= 6 && pstTime[0] <= 9 && pstTime.includes('AM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F8B195');
      $('#pst-time').css('background-color', '#F8B195');
    }

    //color change for between 10 a.m and 1:59 pm (cet 10, 11, 12, 13)
    if (cetTime[0] == 1 && cetTime[1] <= 3) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F6728080');
      $('#cet-time').css('background-color', '#F67280');
    }
    if ((cstTime[0] == 1 && cstTime[1] <= 1 && cstTime.includes('AM')) ||
      (cstTime[0] <= 5 && cstTime[1] == ":" && cstTime.includes('PM')) || (cstTime[0] == 1 && cstTime[1] == 2) && cstTime.includes('PM')) {
        //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F6728080');
      $('#cst-time').css('background-color', '#F67280');
    }
    if ((estTime[0] == 1 && estTime[1] <= 1 && estTime.includes('AM')) ||
      (estTime[0] <= 5 && estTime[1] == ":" && estTime.includes('PM')) || (estTime[0] == 1 && estTime[1] == 2) && estTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F6728080');
      $('#est-time').css('background-color', '#F67280');
    }
    if ((mstTime[0] == 1 && mstTime[1] <= 1 && mstTime.includes('AM')) ||
      (mstTime[0] <= 5 && mstTime[1] == ":" && mstTime.includes('PM')) || (mstTime[0] == 1 && mstTime[1] == 2) && mstTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F6728080');
      $('#mst-time').css('background-color', '#F67280');
    }
    if ((pstTime[0] == 1 && pstTime[1] <= 1 && pstTime.includes('AM')) ||
      (pstTime[0] <= 5 && pstTime[1] == ":" && pstTime.includes('PM')) || (pstTime[0] == 1 && pstTime[1] == 2) && pstTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#F6728080');
      $('#pst-time').css('background-color', '#F67280');
    }

    //color change for between 2 and 5:59 pm (cet 14 - 17)

    if (cetTime[0] == 1 && cetTime[1] > 3 && cetTime[1] <= 7) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#cet-time').css('background-color', '#C06C84');
    }
    if (cstTime[0] >= 2 && cstTime[0] <= 5 && cstTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#cst-time').css('background-color', '#C06C84');
    }
    if (estTime[0] >= 2 && estTime[0] <= 5 && estTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#est-time').css('background-color', '#C06C84');
    }
    if (mstTime[0] >= 2 && mstTime[0] <= 5 && mstTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#mst-time').css('background-color', '#C06C84');
    }
    if (pstTime[0] >= 2 && pstTime[0] <= 5 && pstTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#pst-time').css('background-color', '#C06C84');
    }
 //color change for between 6 and 9:59 pm  (cet 18-21)
    if (cetTime[0] >= 1 && cetTime[1] <= 8 || cetTime[0] >= 2 && cetTime[1] <= 1 ) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#cet-time').css('background-color', '#6C5B7B');
    }
    if (cstTime[0] >= 6 && cstTime[0] <=9  && cstTime.includes('PM') ){
      //with 80 is including the alpha value to make the color opaque
    // $('#cst-time').css('background-color', '#6C5B7B');
      $('#cst-time').css('background-color','#6C5B7B');
    }
    if (estTime[0] >= 6 && estTime[0] <= 9 && estTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#est-time').css('background-color', '#6C5B7B');
    }
    if (mstTime[0] >= 6 && mstTime[0] <= 9 && mstTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#mst-time').css('background-color', '#6C5B7B');
    }
    if (pstTime[0] >= 6 && pstTime[0] <= 9 && pstTime.includes('PM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#pst-time').css('background-color', '#6C5B7B');
    }


    //color change for between 10pm and 5:59 am
    //cetTime is in 22-24 and 01-05 format
    if ((cetTime[0] == 2  && cetTime[1] <= 2) ||
      (cetTime[0] == 0 && cetTime[1] <= 5 )) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#cet-time').css('background-color', '#355C7D');
    }
    if ((cstTime[0] == 1  && cstTime[1] <=1 && cstTime.includes('PM')) ||
      (cstTime[0] <= 5 && cstTime[1] == ':' && cstTime.includes('AM')) || (cstTime[0] == 1 && cstTime[1] == 2) && cstTime.includes('AM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#cst-time').css('background-color', '#355C7D');
    }
    if ((estTime[0] == 1 && estTime[1] <= 1 && estTime.includes('PM')) ||
      (estTime[0] <= 5 && estTime[1] == ':' && estTime.includes('AM')) || (estTime[0] == 1 && estTime[1] == 2) && estTime.includes('AM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#est-time').css('background-color', '#355C7D');
    }
    if ((mstTime[0] == 1 && mstTime[1] <= 1 && mstTime.includes('PM')) ||
      (mstTime[0] <= 5 && mstTime[1] == ':' && mstTime.includes('AM')) || (mstTime[0] == 1 && mstTime[1] == 2) && mstTime.includes('AM')) {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#mst-time').css('background-color', '#355C7D');
    }
    if ((pstTime[0] == 1 && pstTime[1] <= 1 && pstTime.includes('PM')) ||
      (pstTime[0] <= 5 && pstTime[1] == ':' && pstTime.includes('AM')) || (pstTime[0] == 1 && pstTime[1] == 2) && pstTime.includes('AM'))  {
      //with 80 is including the alpha value to make the color opaque
      // $('#cst-time').css('background-color', '#6C5B7B');
      $('#pst-time').css('background-color', '#355C7D');
    }
  }

  setInterval(updateClock, 1000);
}
