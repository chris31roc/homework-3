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
var userChoices;

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

  if (!confirmNumbers && !confirmSpecialChar && !confirmLowerChar && !confirmUpperChar){
    alert("Password needs to contain at least one of the four character types!");
  }

  else if (confirmSpecialChar && confirmNumbers && confirmUpperChar && confirmLowerChar) {
      userChoices = specialChar.concat(numbers, lowerChar, upperChar);
  }


    // 3 positive userChoices
  else if (confirmSpecialChar && confirmNumbers && confirmUpperChar) {
      userChoices = specialChar.concat(numbers, upperChar);
      console.log(userChoices)
  }
  else if (confirmSpecialChar && confirmNumbers && confirmLowerChar) {
      userChoices = specialChar.concat(numbers, lowerChar);
      console.log(userChoices)
  }
  else if (confirmSpecialChar && confirmLowerChar && confirmUpperChar) {
      userChoices = specialChar.concat(lowerChar, upperChar);
      console.log(userChoices)
  }
  else if (confirmNumbers && confirmLowerChar && confirmUpperChar) {
      userChoices = numbers.concat(lowerChar, upperChar);
      console.log(userChoices)
  }


  // 2 positive userChoices 
  else if (confirmSpecialChar && confirmNumbers) {
      userChoices = specialChar.concat(numbers);

  } else if (confirmSpecialChar && confirmLowerChar) {
      userChoices = specialChar.concat(lowerChar);

  } else if (confirmSpecialChar && confirmUpperChar) {
      userChoices = specialChar.concat(upperChar);
  }
  else if (confirmLowerChar && confirmNumbers) {
      userChoices = lowerChar.concat(numbers);

  } else if (confirmLowerChar && confirmUpperChar) {
      userChoices = lowerChar.concat(upperChar);

  } else if (confirmNumbers && confirmUpperChar) {
      userChoices = numbers.concat(upperChar);
  }


  // 1 positive userChoice
  else if (confirmSpecialChar) {
      userChoices = specialChar;
  }
  else if (confirmNumbers) {
      userChoices = numbers;
  }
  else if (confirmLowerChar) {
      userChoices = lowerChar;
  }
  else if (confirmUpperChar) {
      userChoices = upperChar;
  };

  // password variable array
  var password = []

  // Random selection for all variables: 
  for (var i = 0; i < passLength; i++) {
    var pickUserChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    password.push(pickUserChoices);
    // console.log(pickUserChoices)
  }
  // This joins the password array and converts it to a string
  var p = password.join("");
  UserInput(p);
  return p;
}

// the password into the textbox
function UserInput(p) {
  document.getElementById("password").textContent = p;
}