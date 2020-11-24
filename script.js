//Checking to see if I'm connected to my application
console.log("App Connected")

//Linking the element IDs  for the generate and password button
var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");

generateBtn.addEventListener("click", function(event) {
event.preventDefault();
generatePassword()
});

//Assigning the different types of characters to be used for the generator
var numbers = "1234567890" .split("")
var specialChar = "!@#$%^&*()_+?<>}{[]`~" .split("")
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("")
var lowerChar = "abcdefghijklmnopqrstuvwxyz" .split("")

//Checking to make sure they are logged correctly
console.log(numbers)
console.log(specialChar)
console.log(upperChar)
console.log(lowerChar)

//Prompts and instructions for the user to start 
function generatePassword() {
  var passLength = prompt(
    "How many characters would you like your password to be?\nPlease choose a number between 8 and 128 characters.\n\nThen click OK!"
    );

}


