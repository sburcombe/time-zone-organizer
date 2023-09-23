 if (employeeThree["currenttime"][0] >= 6 && employeeThree["currenttime"][0] <= 9 && employeeThree["currenttime"].includes('AM')){
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
    } if (employeeThree["currenttime"][0] >= 2 && employeeThree["currenttime"][0] <= 5 && cstTime.includes('PM')){
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
