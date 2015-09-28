  var born =  1983;
  var today = 2015;
  var name = "Tim";
  var age = today - born;
  var message = name + " is " + age + " years old";
  var output = document.getElementById("msg").innerHTML=message;




//console.log(message);
// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
yourName = "Jesse";
instructorName = "Tim";

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName +"."; 

var output2 = document.getElementById("msg2").innerHTML= statement;
console.log(statement);
 output.innerHTML += statement;