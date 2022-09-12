//console.log("Hello World");

let username = "Louisa";

let userID= 42;
userID += 3.14;

console.log(username);
console.log(typeof(username));
console.log(userID);
console.log(typeof(userID));

//string
string="New york city";

//number
number = 45;

//boolean
boolean = "True";

//operations
console.log(5 + 7);

console.log(6 - 2);

console.log(3 * 5);

console.log(10 / 5);

console.log(22 % 7);

//properties
console.log("Codecademy".length);

//built-in objects
console.log(Math.ceil(43.8));

//condtionals
if (hour < 18) {
    greeting = "Good day";
  }


  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  //logical operators
  /* || (OR), 
  && (AND), 
  ! (NOT),
  */
  if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}