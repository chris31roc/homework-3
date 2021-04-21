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
var availableOptions = [];

//Checking to make sure they are logged correctly
console.log(numbers)
console.log(specialChar)
console.log(upperChar)
console.log(lowerChar)

//Prompts and instructions for the user to select users characters in password 
function generatePassword() {
  var passLength = prompt(
    "How many characters would you like your password to be?\nPlease choose a number between 8 and 128 characters.\nThen click OK!"
    );
    passLength = parseInt(passLength);

    if (passLength > 8 && passLength < 128) {
      var selectNumbers = confirm(
        "Would you like numbers in your password?\n\n OK = Yes   |   Cancel = No"
      );
    }

      if (selectNumbers) {
        availableOptions = availableOptions.concat(numbers);
        console.log(availableOptions);
      }
      
      var selectSpecial = confirm(
        "Would you like special characters in your password?\n\n OK = Yes   |   Cancel = No"
      );

      if (selectSpecial) {
        availableOptions = availableOptions.concat(specialChar);
        console.log(availableOptions);
      }

      var selectUpper = confirm( 
        "Would you like upper case characters in your password?\n\n OK = Yes   |   Cancel = No"
      );
      
      if (selectUpper) {
        availableOptions = availableOptions.concat(upperChar);
        console.log(availableOptions);
      }

      var selectLower = confirm(
        "Would you like lower case characters in your password?\n\n OK = Yes   |   Cancel = No"
      );

      if (selectLower) {
        availableOptions = availableOptions.concat(lowerChar);
        console.log(availableOptions)
      }

      if (!selectNumbers && !selectSpecial && !selectUpper && !selectLower) {
        alert("Password needs to contain at least one of the four character types!");
      }

      var newPassword = "";
      for (var i = 0; i < getPassLength; i++) {
        var newNumber = Math.floor(Math.random() * availableOptions.length);
        newPassword += availableOptions[newNumber]
        console.log(newPassword);
      }

      console.log(newPassword);

      passwordText.textContent = newPassword;

        
        alert("Must be between 6 and 128 characters");
        passwordText.textContent = "";
}