
var employees = {
  "employees": [
    {
      "id": 1,
      "name": "Stephanie Burcombe",
      "timezone": "PST",
      "currenttime": "6:18pm",
      "workinghours": "8:00am-5:00pm",
      "email": "sburcombe@gmail.com"
    },
    {
      "id": 2,
      "name": "Dustin Burcombe",
      "timezone": "EST",
      "currenttime": "9:18pm",
      "workinghours": "7:00am-12:00pm",
      "email": "dburcombe@yahoo.com"
    }
  ]
}
const employeeOne = employees["employees"][0];
const employeeTwo = employees["employees"][1];



window.addEventListener('load', function (event) {

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

  getCurrentTimes();
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


function getCurrentTimes(){
  //get Date time and save in specific time zones
  var date = new Date();
  console.log("date: ", date);
  //AST
   var ASTdate = date.toLocaleString("en-US", {timeZone: "America/Anguilla"});
   console.log("ast: ", ASTdate);
  //EST
  var ESTdate = date.toLocaleString("en-US", { timeZone: "America/Cayman" });
  console.log("est: ", ESTdate);
  //CST
  var CSTdate = date.toLocaleString("en-US", { timeZone: "America/Belize" });
  console.log("cst: ", CSTdate);
  //MST
  var MSTdate = date.toLocaleString("en-US", { timeZone: "America/Phoenix" });
  console.log("mst: ", MSTdate);
  //PST
  var PSTdate = date.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  console.log("pst: ", PSTdate);
  //AKST
  var AKSTdate = date.toLocaleString("en-US", { timeZone: "America/Adak" });
  console.log("akst: ", AKSTdate);
  //HST

  //UTC-11 (Samoa standard time)

  //UTC+10 (Chamorro Standard Time)

  if (employeeOne['timezone'] == "PST") {
    employeeOne["currentTime"] = PSTdate;
  }

}
