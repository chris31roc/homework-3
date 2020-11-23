

var numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0]
var specialCharacters = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "?"]
var upperCase = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]
var lowerCase = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
var userGuess = prompt ("How many characters would you like your password to be?")

for (var numbers = 0; numbers < 10; numbers++) {
  
}

for (var specialCharacters = 0; specialCharacters < 11; specialCharacters++) {
  
}

for (var upperCase = 0; upperCase < 26; upperCase++) {
  
}

for (var lowerCase = 0; lowerCase < 26; lowerCase++) {
  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);