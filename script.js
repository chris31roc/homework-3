//Checking to see if I'm connected to my application
console.log("App Connected")

//Linking the element IDs for the generate button and password text
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
var userChoices = [];

//Input variables
var passLength;
var confirmNumbers;
var confirmLowerChar;
var confirmUpperChar;
var confirmSpecialChar;

//Checking to make sure they are logged correctly
console.log(numbers)
console.log(specialChar)
console.log(upperChar)
console.log(lowerChar)

//Prompts and instructions for the user to select users characters in password 
function generatePassword() {

    passLength = parseInt(prompt("How many characters would you like your password to be?\nPlease choose a number between 8 and 128 characters.\nThen click OK!"))
    if (!passLength){
        alert("Please choose a number between 8 and 128");
    }

    else if (passLength < 8 || passLength > 128){
        passLength = parseInt(prompt("You must choose a number between 8 and 128"));
    }

    else {
      confirmNumbers = confirm("Would you like numbers in your password?\n\n OK = Yes   |   Cancel = No");
      confirmSpecialChar = confirm("Would you like special characters in your password?\n\n OK = Yes   |   Cancel = No");
      confirmLowerChar = confirm("Would you like lower case characters in your password?\n\n OK = Yes   |   Cancel = No");
      confirmUpperChar = confirm("Would you like upper case characters in your password?\n\n OK = Yes   |   Cancel = No");
  };
}