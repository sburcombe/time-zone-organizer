
var employees = {
  "employees": [
    {
      "id": 1,
      "name": "Stephanie Burcombe",
      "timezone": "PST",
      "currenttime": "6:18pm",
      "workinghours": "8:00am-5:00pm"
    },
    {
      "id": 2,
      "name": "Dustin Burcombe",
      "timezone": "EST",
      "currenttime": "9:18pm",
      "workinghours": "7:00am-12:00pm"
    }
  ]
}
const employeeOne = employees["employees"][0];
const employeeTwo = employees["employees"][1];



window.addEventListener('load', function (event) {
console.log("employeeOne: ", employeeOne);
//Display employee Details
//Display Employee names
  var employeeOneNameSpace = document.querySelector("#first-employee-name");
  employeeOneNameSpace.innerHTML += employeeOne["name"];

  var employeeTwoNameSpace = document.querySelector("#second-employee-name");
  employeeTwoNameSpace.innerHTML += employeeTwo["name"];

  //Display Employee TimeZones
var employeeOneTimeZone = document.querySelector("#time-zone-1");
  employeeOneTimeZone.innerHTML += employeeOne["timezone"];
  var employeeTwoTimeZone = document.querySelector("#time-zone-2");
  employeeTwoTimeZone.innerHTML += employeeTwo["timezone"];

  //Display Employee Current Times
var employeeOneCurrentTime = document.querySelector("#current-time-1");
  employeeOneCurrentTime.innerHTML += employeeOne["currenttime"];
var employeeTwoCurrentTime = document.querySelector("#current-time-2");
  employeeTwoCurrentTime.innerHTML += employeeTwo["currenttime"];

  //Display Employee Working Hours
var employeeOneWorkingHours = document.querySelector("#working-hours-1");
  employeeOneWorkingHours.innerHTML += employeeOne["workinghours"];
var employeeTwoWorkingHours = document.querySelector("#working-hours-2");
  employeeTwoWorkingHours.innerHTML += employeeTwo["workinghours"];
});
