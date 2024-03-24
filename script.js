
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


//adding a new employee
// var addEmployeeForm = document.getElementById("add-employee-form");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // handle submit
// });



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
  //makes the call to display the currentTimes for the timezone clocks;
  getCurrentTimes();
  console.log("employees 91: ", employees);
  // debugger;
//   var employeeOne = employees["employees"][0];

// var employeeTwo = employees["employees"][1];
// var employeeThree = employees["employees"][2];
  //display only the user that you've selected
  if (window.location.href.includes('editEmployee')) {

    var clickedId = localStorage.getItem('clickedId');

    var employeeNameSpace = document.querySelector("#employee-name");
    var employeeTimeZone = document.querySelector("#time-zone");
    // var employeeCurrentTime = document.querySelector("#current-time");
    var employeeWorkingHours = document.querySelector("#working-hours");
    var employeeImage = document.querySelector("#employee-image");
    console.log(clickedId);
    for (let i = 0; i < employees['employees'].length; i++) {
      if (clickedId == employees['employees'][i]['id']){
    console.log("hello hello");
          $('#employee-name').attr('placeholder', employees['employees'][i]["name"]);
      //Display Employee TimeZones
      $('#time-zone').attr('placeholder', employees['employees'][i]["timezone"]);
      //Display Employee Current Times
      // getCurrentTimes();

      // $('#current-time').attr('placeholder', employee["currenttime"]);
      //Display Employee Working Hours
      $('#working-hours').attr('placeholder', employees['employees'][i]["workinghours"]);
        //Display Employee Working Hours
        $('#email').attr('placeholder', employees['employees'][i]["email"]);
        $('#employee-id').attr('value', employees['employees'][i]["id"]);

        if (!employees['employees'][i]["image"]){
          //need to keep working on this part to get the emploiyees without images to display the default image
        employeeImage.src = '/_assets/default_avatar.png';
      } else {
          employeeImage.src = employees['employees'][i]["image"];
      }
        console.log("image source sgain: ", employees['employees'][i]["image"] );
      }
  }
}

//Display employee Details

  for (let i = 0; i < employees['employees'].length; i++) {
    // console.log("employees names over here: " , employees['employees'][i]['name']);
    // console.log("class names: ", document.querySelector("#employee-name-" + employees['employees'][i]['id']));


    if (employees['employees'][i] && document.querySelector("#employee-name-" + employees['employees'][i]['id'])) {
      //Display Employee names
      console.log("this is the name: ", employees['employees'][i]['id']);
      var employeeNameSpace = document.querySelector("#employee-name-" + employees['employees'][i]['id']);
      employeeNameSpace.innerHTML = employees['employees'][i]['name'];

      //Display Employee TimeZones
      var employeeTimeZone = document.querySelector("#time-zone-" + employees['employees'][i]['id']);
      employeeTimeZone.innerHTML = "Time Zone: " + employees['employees'][i]["timezone"];

      //Display Employee Current Times
      getCurrentTimes();

      var employeeCurrentTime = document.querySelector("#current-time-" + employees['employees'][i]['id']);
      employeeCurrentTime.innerHTML = "Current Time: " + employees['employees'][i]["currenttime"];

      //Display Employee Working Hours
      var employeeWorkingHours = document.querySelector("#working-hours-" + employees['employees'][i]['id']);
      employeeWorkingHours.innerHTML = "Working Hours: " + employees['employees'][i]["workinghours"];

      //Connect Email Addresses to Message Button
      var employeeEmailElement = document.querySelector("#email" + employees['employees'][i]['id']);
      var employeeEmail = "mailto:" + employees['employees'][i]['email'];
      $(employeeEmailElement).attr("href", employeeEmail);

    }
  }

//   if (employee && document.querySelector("#employee-name-1")) {
// //Display Employee names
//   var employeeOneNameSpace = document.querySelector("#employee-name-1");
//   employeeOneNameSpace.innerHTML = employeeOne["name"];

//   //Display Employee TimeZones
//   var employeeOneTimeZone = document.querySelector("#time-zone-1");
//   employeeOneTimeZone.innerHTML = "Time Zone: " + employeeOne["timezone"];

//   //Display Employee Current Times
//   getCurrentTimes();

//   var employeeOneCurrentTime = document.querySelector("#current-time-1");
//   employeeOneCurrentTime.innerHTML = "Current Time: " + employeeOne["currenttime"];

//   //Display Employee Working Hours
//   var employeeOneWorkingHours = document.querySelector("#working-hours-1");
//   employeeOneWorkingHours.innerHTML = "Working Hours: " + employeeOne["workinghours"];

//   //Connect Email Addresses to Message Button
//   var employeeOneEmailElement = document.querySelector("#email1");
//   var employeeOneEmail = "mailto:" + employeeOne['email'];
//   $(employeeOneEmailElement).attr("href", employeeOneEmail);

// }

  //scheduling a meeting

  var themonth = 1;
  renderCal(themonth);

  $('.minusmonth').click(function () {
    themonth += -1;
    renderCal(themonth);
  });

  $('.addmonth').click(function () {
    themonth += 1;
    renderCal(themonth);
  });

  function renderCal(themonth) {
    $('.calendar li').remove();
    $('.calendar ul').append('<li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li> <li>Su</li>');
    var d = new Date(),
      currentMonth = d.getMonth() + themonth, // get this month
      days = numDays(currentMonth, d.getYear()), // get number of days in the month
      fDay = firstDay(currentMonth, d.getYear()) - 1, // find what day of the week the 1st lands on
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // month names

    $('.calendar p.monthname').text(months[currentMonth - 1]); // add month name to calendar

    for (var i = 0; i < fDay - 1; i++) { // place the first day of the month in the correct position
      $('<li>&nbsp;</li>').appendTo('.calendar ul');
    }

    for (var i = 1; i <= days; i++) { // write out the days
      $('<input name="datetime" id="datetime" value=' + i + '><li>' + i + '</li></input>').appendTo('.calendar ul');
    }

    function firstDay(month, year) {
      return new Date(year, month, 1).getDay();
    }

    function numDays(month, year) {
      return new Date(year, month, 0).getDate();
    }

    var clicker = 0;
    var min = 0;
    var max = 0;

    $('.calendar li').click(function () { // toggle selected dates
      if (clicker == 0) {
        clicker = 1;
        $('.calendar li').removeClass('red');
        $(this).addClass('red');
        min = $(this).text();
        console.log("this: ", $(this).text());
        $(this).attr('value', $(this).text());
      } else {
        clicker = 0;
        $(this).addClass('red');
        console.log("this: ", $(this));
        $(this).attr('value', 'hello');
        $('.calendar li.red').each(function () {
          max = $(this).text();
        });
        for (i = parseInt(min); i < parseInt(max); i++) {
          $('.calendar li:nth-of-type(' + (i + 7 + fDay - 1) + ')').addClass('red');
        }
      }
    });
  }

});

function getCurrentTimes() {
  //get Date time and save in specific time zones
// console.log("line 195");
  // var employeeOne = employees["employees"][0];

  // var employeeTwo = employees["employees"][1];
  // var employeeThree = employees["employees"][2];

  for (let i = 0; i < employees['employees'].length; i++) {



    switch (employees['employees'][i]['timezone']) {
        case 'EST' || 'EDT':
        employees['employees'][i]["currenttime"] = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
          break;
        case 'PST' || 'PDT':
        employees['employees'][i]["currenttime"] = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
          break;
        default:
        employees['employees'][i]["currenttime"] = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Phoenix' });

      }

    if (employees['employees'][i]["currenttime"][0] >= 6 && employees['employees'][i]["currenttime"][0] <= 9 && employees['employees'][i]["currenttime"].includes('AM')) {
      //change icon opacity for 6am -9:59 am
      $('#employee-' + employees['employees'][i]['id'] + ' .early-morning').css('opacity', '100');
      $('#employee-' + employees['employees'][i]['id'] + ' .mid-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .afternoon').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .evening').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .night').css('opacity', '0.3');
    } if ((employees['employees'][i]["currenttime"][0] == 1 && employees['employees'][i]["currenttime"][1] <= 1 && employees['employees'][i]["currenttime"].includes('AM')) ||
      // (employees['employees'][i]["currenttime"][0] <= 5 && employees['employees'][i]["currenttime"][1] == ":" && employees['employees'][i]["currenttime"].includes('PM')) ||
      (employees['employees'][i]["currenttime"][0] == 1 && employees['employees'][i]["currenttime"][1] == 2) && employees['employees'][i]["currenttime"].includes('PM')) {
      //change icon opacity for 10am-12:59 pm
      $('#employee-' + employees['employees'][i]['id'] + ' .early-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .mid-morning').css('opacity', '100');
      $('#employee-' + employees['employees'][i]['id'] + ' .afternoon').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .evening').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .night').css('opacity', '0.3');
    } if (employees['employees'][i]["currenttime"][0] >= 2 && employees['employees'][i]["currenttime"][0] <= 5 && employees['employees'][i]["currenttime"].includes('PM')) {
      //change icon opacity for 1pm-5:59 pm
      $('#employee-' + employees['employees'][i]["currenttime"][0]['id'] + ' .early-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]["currenttime"][0]['id'] + ' .mid-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]["currenttime"][0]['id'] + ' .afternoon').css('opacity', '100');
      $('#employee-' + employees['employees'][i]["currenttime"][0]['id'] + ' .evening').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]["currenttime"][0]['id'] + ' .night').css('opacity', '0.3');
    } if (employees['employees'][i]["currenttime"][0] >= 6 && employees['employees'][i]["currenttime"][0] <= 9 && employees['employees'][i]["currenttime"].includes('PM')) {
      //change icon opacity for 6pm-9:59 pm
      $('#employee-' + employees['employees'][i]['id'] + ' .early-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .mid-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .afternoon').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .evening').css('opacity', '100');
      $('#employee-' + employees['employees'][i]['id'] + ' .night').css('opacity', '0.3');
    } if ((employees['employees'][i]["currenttime"][0] == 1 && employees['employees'][i]["currenttime"][1] <= 1 && employees['employees'][i]["currenttime"].includes('PM')) ||
      (employees['employees'][i]["currenttime"][0] <= 5 && employees['employees'][i]["currenttime"][1] == ':' && employees['employees'][i]["currenttime"].includes('AM')) ||
      (employees['employees'][i]["currenttime"][0] == 1 && employees['employees'][i]["currenttime"][1] == 2) && employees['employees'][i]["currenttime"].includes('AM')) {
      //change icon opacity for 10pm-5:59 am
      $('#employee-' + employees['employees'][i]['id'] + ' .early-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .mid-morning').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .afternoon').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .evening').css('opacity', '0.3');
      $('#employee-' + employees['employees'][i]['id'] + ' .night').css('opacity', '100');
    }
  }

  ///need an array of the employee list to loop through and then dynamically generate these items (including the check for current time)
 //logic needs to be consolidated for use (i.e. is mid-morning have one space where all the logic is worked out and then in these conditional checks
 //just check for isMidMorning value);


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
