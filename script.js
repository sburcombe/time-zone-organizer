
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


var employees = {
  "employees": [
    {
      "id": 1,
      "name": "Stephanie Burcombe",
      "timezone": "PST",
      "currenttime": "",
      "workinghours": "8:00am-5:00pm",
      "email": "sburcombe@gmail.com",
      "image": "_assets/employee1.jpg"
    },
    {
      "id": 2,
      "name": "Dustin Burcombe",
      "timezone": "EST",
      "currenttime": "",
      "workinghours": "7:00am-12:00pm",
      "email": "dburcombe@yahoo.com",
      "image": "_assets/employee2.jpg"
    },
    {
      "id": 3,
      "name": "Ava Burcombe",
      "timezone": "MST",
      "currenttime": "",
      "workinghours": "9:00am-1:00pm",
      "email": "aburcombe@toddlertime.com",
      "image": "_assets/employee3.jpg"
    }
  ]
}


const employeeOne = employees["employees"][0];
const employeeTwo = employees["employees"][1];
const employeeThree = employees["employees"][2];


window.addEventListener('load', function (event) {

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
      $('#current-time').attr('placeholder', employeeOne["currenttime"]);
      //Display Employee Working Hours
      $('#working-hours').attr('placeholder', employeeOne["workinghours"]);

      employeeImage.src = employeeOne["image"];
    // employeeNameSpace.innerHTML += employeeOne["name"];
    // //Display Employee TimeZones
    // employeeTimeZone.innerHTML += employeeOne["timezone"];
    // //Display Employee Current Times
    // getCurrentTimes();
    // employeeCurrentTime.innerHTML += employeeOne["currenttime"];
    // //Display Employee Working Hours
    // employeeWorkingHours.innerHTML += employeeOne["workinghours"];

    // employeeImage.src = employeeOne["image"];

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
  employeeOneNameSpace.innerHTML += employeeOne["name"];

  //Display Employee TimeZones
  var employeeOneTimeZone = document.querySelector("#time-zone-1");
  employeeOneTimeZone.innerHTML += employeeOne["timezone"];

  //Display Employee Current Times
  getCurrentTimes();

  var employeeOneCurrentTime = document.querySelector("#current-time-1");
  employeeOneCurrentTime.innerHTML += employeeOne["currenttime"];

  //Display Employee Working Hours
  var employeeOneWorkingHours = document.querySelector("#working-hours-1");
  employeeOneWorkingHours.innerHTML += employeeOne["workinghours"];

  //Connect Email Addresses to Message Button
  var employeeOneEmailElement = document.querySelector("#email1");
  var employeeOneEmail = "mailto:" + employeeOne['email'];
  $(employeeOneEmailElement).attr("href", employeeOneEmail);

}
  if (document.querySelector("#second-employee-name")) {
      //Display Employee names
    var employeeTwoNameSpace = document.querySelector("#second-employee-name");
    employeeTwoNameSpace.innerHTML += employeeTwo["name"];
  //Display Employee TimeZones
    var employeeTwoTimeZone = document.querySelector("#time-zone-2");
    employeeTwoTimeZone.innerHTML += employeeTwo["timezone"];
  //Display Employee Current Times
    getCurrentTimes();

    var employeeTwoCurrentTime = document.querySelector("#current-time-2");
    employeeTwoCurrentTime.innerHTML += employeeTwo["currenttime"];
  //Display Employee Working Hours
    var employeeTwoWorkingHours = document.querySelector("#working-hours-2");
    employeeTwoWorkingHours.innerHTML += employeeTwo["workinghours"];
  //Connect Email Addresses to Message Button
    var employeeTwoEmailElement = document.querySelector("#email2");
    var employeeTwoEmail = "mailto:" + employeeTwo['email'];
    $(employeeTwoEmailElement).attr("href", employeeTwoEmail);

  }

  if (document.querySelector("#third-employee-name")) {
    //Display Employee Name
    var employeeThreeNameSpace = document.querySelector("#third-employee-name");
    employeeThreeNameSpace.innerHTML += employeeThree["name"];

    //Display Employee TimeZones
    var employeeThreeTimeZone = document.querySelector("#time-zone-3");
    employeeThreeTimeZone.innerHTML += employeeThree["timezone"];

    //Display Employee Current Times
    getCurrentTimes();
    var employeeThreeCurrentTime = document.querySelector("#current-time-3");
    employeeThreeCurrentTime.innerHTML += employeeThree["currenttime"];

    //Display Employee Working Hours
    var employeeThreeWorkingHours = document.querySelector("#working-hours-3");
    employeeThreeWorkingHours.innerHTML += employeeThree['workinghours'];

    //Connect Email Addresses to Message Button
    var employeeThreeEmailElement = document.querySelector("#email3");
    var employeeThreeEmail = "mailto:" + employeeThree['email'];
    $(employeeThreeEmailElement).attr("href", employeeThreeEmail);
  }

});

function getCurrentTimes() {
  //get Date time and save in specific time zones

  //HST

  //UTC-11 (Samoa standard time)

  //UTC+10 (Chamorro Standard Time)

  if (employeeOne['timezone'] == "PST") {
    employeeOne["currenttime"] = PSTdate;
  }
  if (employeeTwo['timezone'] == "EST") {
    employeeTwo["currenttime"] = ESTdate;
  }
  if (employeeThree['timezone'] == "MST") {
    employeeThree["currenttime"] = MSTdate;
  }


  //sample code for clock display
  function updateClock() {
    const gmtTime = new Date().toUTCString();
    const cetTime = new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Berlin' });
    const cstTime = new Date().toLocaleString("en-US", { timeZone: "America/Belize" });
    const estTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const mstTime = new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' });


    document.getElementById('gmt').innerHTML = gmtTime;
    document.getElementById('cst').innerHTML = cstTime;
    document.getElementById('est').innerHTML = estTime;
    document.getElementById('mst').innerHTML = mstTime;
  }

  setInterval(updateClock, 1000);



}

//code for visual clock


function setDate() {
  //need to come back and adjust for dynamic retrieval of id and timezone
  // var clickedId = localStorage.getItem('clickedId');

  const now = new Date();





  // let secondHand = document.querySelector('.second-hand');
  // let minsHand = document.querySelector('.min-hand');
  // let hourHand = document.querySelector('.hour-hand');
  //need to come back and adjust for dynamic retrieval of id and timezone
  let clickedId = localStorage.getItem('clickedId');
  //  alert(clickedId);

  //possible logic for analog clock changes
  // if (clickedId && clickedId === 'edit-user-1') {
  //   getCurrentTimes();
  //   var now = new Date().toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles" });
  // }


  // if (clickedId && clickedId === 'edit-user-2') {
  //   getCurrentTimes();
  //   var now = new Date();

  //   // var now = new Date().toLocaleTimeString("nl-NL", { timeZone: "America/New_York" });
  //   var nowTime = new Date().getTime();
  //   var nowTimeZoneAdjusted = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });
  //   var timeZoneDate = new Date(nowTime);
  //   console.log("timeZoneDate: ", timeZoneDate);
  //   console.log("nowTimeZoneAdjusted: ", nowTimeZoneAdjusted);
  // }

  // if (clickedId && clickedId === 'edit-user-3') {
  //   getCurrentTimes();
  //   var now = new Date(MSTdate);
  // }
  console.log("now: ",now);
  // let seconds = now.getSeconds();
  // let secondsDegrees = ((seconds / 60) * 360) + 90;
  // secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // let mins = now.getMinutes();
  // let minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  // minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // let hour = now.getHours();
  // let hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  // hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

  setDate();
