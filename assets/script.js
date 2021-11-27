// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()/*-<=>;:[]{}";

// Write password to the #password input
function generatePassword() {

  var password = "";
  var passwordChar = "";

  var passwordLengthUser = prompt("What is the length of your desired password? Must be between 8 and 128 characters.")
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8) {
    alert("Password must be more than 7 characters!");
    return "";
  }

  if (passwordLengthUser > 128) {
    alert("Password must not be more than 128 characters!");
    return "";
  }

  var lowercaseCharactersChoice

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
