//create array for password
//prompt for length of password
//prompts for lowercase, uppercase, specials, numericals
//create var to hold input
//put array through function(s) that create based on selections and randomizes for password
//display password

//assignment code here
//vars for characters
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars= ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", "?", "@", "^", "~"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//console.log comment
function writePassword() {
  console.log("HIT")
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt for password length
function generatePassword() {
 var passwordLength = parseInt(window.prompt("Type a number between 8 and 128 for password length."));
 if (passwordLength <128 || passwordLength > 8) {
  window.prompt("You must type in a number between 8 and 128.");
 }


//select character types for password
 var selectUpper = window.confirm("Do you want Uppercase letters included?");
 var selectLower = window.confirm("Do you want Lowercase letters included?");
 var selectNums = window.confirm("Do you want Numbers included?");
 var selectChars = window.confirm("Do you want Special Characters included?");
//create variables for arguments
 var passwordOption = [];

 var yourPassword = [];

//arguments to pass through
 if (selectUpper) {
   passwordOption = passwordOption.concat(upperCase);
 }
 if (selectLower) {
   passwordOption = passwordOption.concat(lowerCase);
 }
 if (selectNums) {
   passwordOption = passwordOption.concat(nums);
 }
 if (selectChars) {
   passwordOption = passwordOption.concat(specialChars);
 }

//for loop
 for (var i= 0; i < passwordLength; i++) {
   var randomized = passwordOption[Math.floor(Math.random() * (passwordOption.length))]
   yourPassword.push(randomized);
 }

//return randomized password without string
 return yourPassword.join("");
};