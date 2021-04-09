
var employees = {
  "employees": [
    {
      "id": 1,
      "name": "Stephanie Burcombe",
      "timezone": "PST"
    },
    {
      "id": 2,
      "name": "Dustin Burcombe",
      "timezone": "EST"
    }
  ]
}
const employeeOne = employees["employees"][0];
const employeeTwo = employees["employees"][1];



window.addEventListener('load', function (event) {
console.log("employeeOne: ", employeeOne);
  var employeeOneNameSpace = document.querySelector("#first-employee-name");
  employeeOneNameSpace.innerHTML += employeeOne["name"];

  var employeeTwoNameSpace = document.querySelector("#second-employee-name");
  employeeTwoNameSpace.innerHTML += employeeTwo["name"];


});
