
var employees = {
  "employees": [
    {
      "id": 1,
      "name": "Stephanie Burcombe",
      "timezone": "PST",
      "currenttime": "",
      "workinghours": "8:00am-5:00pm",
      "email": "sburcombe@gmail.com"
    },
    {
      "id": 2,
      "name": "Dustin Burcombe",
      "timezone": "EST",
      "currenttime": "",
      "workinghours": "7:00am-12:00pm",
      "email": "dburcombe@yahoo.com"
    },
    {
      "id": 3,
      "name": "Ava Burcombe",
      "timezone": "MST",
      "currenttime": "",
      "workinghours": "9:00am-1:00pm",
      "email": "aburcombe@toddlertime.com"
    }
  ]
}
const employeeOne = employees["employees"][0];
const employeeTwo = employees["employees"][1];
const employeeThree = employees["employees"][2];


window.addEventListener('load', function (event) {

//Display employee Details
//Display Employee names
  var employeeOneNameSpace = document.querySelector("#first-employee-name");
  employeeOneNameSpace.innerHTML += employeeOne["name"];

  var employeeTwoNameSpace = document.querySelector("#second-employee-name");
  employeeTwoNameSpace.innerHTML += employeeTwo["name"];

  var employeeThreeNameSpace = document.querySelector("#third-employee-name");
  employeeThreeNameSpace.innerHTML += employeeThree["name"];

  //Display Employee TimeZones
var employeeOneTimeZone = document.querySelector("#time-zone-1");
  employeeOneTimeZone.innerHTML += employeeOne["timezone"];
  var employeeTwoTimeZone = document.querySelector("#time-zone-2");
  employeeTwoTimeZone.innerHTML += employeeTwo["timezone"];

  var employeeThreeTimeZone = document.querySelector("#time-zone-3");
  employeeThreeTimeZone.innerHTML += employeeThree["timezone"];

  //Display Employee Current Times
  getCurrentTimes();
var employeeOneCurrentTime = document.querySelector("#current-time-1");
  employeeOneCurrentTime.innerHTML += employeeOne["currenttime"];
var employeeTwoCurrentTime = document.querySelector("#current-time-2");
  employeeTwoCurrentTime.innerHTML += employeeTwo["currenttime"];
  var employeeThreeCurrentTime = document.querySelector("#current-time-3");
  employeeThreeCurrentTime.innerHTML += employeeThree["currenttime"];

  //Display Employee Working Hours
var employeeOneWorkingHours = document.querySelector("#working-hours-1");
  employeeOneWorkingHours.innerHTML += employeeOne["workinghours"];
var employeeTwoWorkingHours = document.querySelector("#working-hours-2");
  employeeTwoWorkingHours.innerHTML += employeeTwo["workinghours"];
  var employeeThreeWorkingHours = document.querySelector("#working-hours-3");
  employeeThreeWorkingHours.innerHTML += employeeThree['workinghours'];

  //Connect Email Addresses to Message Button

  var employeeOneEmailElement = document.querySelector("#email1");
  var employeeOneEmail = "mailto:" + employeeOne['email'];
  $(employeeOneEmailElement).attr("href", employeeOneEmail);

  var employeeTwoEmailElement = document.querySelector("#email2");
  var employeeTwoEmail = "mailto:" + employeeTwo['email'];
  $(employeeTwoEmailElement).attr("href", employeeTwoEmail);

  var employeeThreeEmailElement = document.querySelector("#email3");
  var employeeThreeEmail = "mailto:" + employeeThree['email'];
  $(employeeThreeEmailElement).attr("href", employeeThreeEmail);
});

function getCurrentTimes() {
  //get Date time and save in specific time zones
  var date = new Date();

  //AST
  var ASTdate = date.toLocaleString("en-US", { timeZone: "America/Anguilla" });

  //EST
  var ESTdate = date.toLocaleString("en-US", { timeZone: "America/New_York" });

  //CST
  var CSTdate = date.toLocaleString("en-US", { timeZone: "America/Belize" });

  //MST
  var MSTdate = date.toLocaleString("en-US", { timeZone: "America/Phoenix" });

  //PST
  var PSTdate = date.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });

  //AKST
  var AKSTdate = date.toLocaleString("en-US", { timeZone: "America/Adak" });

  //HST

  //UTC-11 (Samoa standard time)

  //UTC+10 (Chamorro Standard Time)

  if (employeeOne['timezone'] == "PST") {
    employeeOne["currenttime"] = PSTdate;
  }
  if (employeeTwo['timezone'] == "EST") {
    employeeTwo["currenttime"] = ESTdate;
  }
  if (employeeTwo['timezone'] == "MST") {
    employeeTwo["currenttime"] = MSTdate;
  }

}
