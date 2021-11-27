// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()/*-<=>;:[]{}";

// Write password to the #password input
function writePassword() {

  var password = "";
  var passwordChar = "";

  // Length of password prompt
  var passwordLengthUser = prompt("What is the length of your desired password? Must be between 8 and 128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8) {
    alert("Password must be more than 7 characters!");
    return "";
  }

  if (passwordLengthUser > 128) {
    alert("Password must not be more than 128 characters!");
    return "";
  }

  // Lowercase Character Prompt
  var promptLowercase = window.prompt("Would you like your password to contain lowercase characters? Answer YES or NO.");

  if (promptLowercase === "yes" || promptLowercase === "YES" || promptLowercase === "Yes"){
    var confirmYes = window.confirm("Are you sure you want to include lowercase characters?");

    if (confirmYes) {
      passwordChar += lowercaseChar;
    }
  }

  // Uppercase Character Prompt
  var promptUppercase = window.prompt("Would you like your password to contain uppercase characters? Answer YES or NO.");
  if (promptUppercase === "yes" || promptUppercase === "YES" || promptUppercase === "Yes"){
    var confirmYes = window.confirm("Are you sure you want to include uppercase characters?");

    if (confirmYes) {
      passwordChar += uppercaseChar;
    }
  }

  // Numerical Character Prompt
  var promptNumbers = window.prompt("Do you want your password to contain numbers? Answer YES or NO.");
  if (promptNumbers === "yes" || promptNumbers === "YES" || promptNumbers === "Yes"){
    var confirmYes = window.confirm("Are you sure you want to include uppercase characters?");

    if (confirmYes) {
      passwordChar += numericalChar;
    }
  }

  // Special Character Prompt
  var promptSpecial = window.prompt("Do you want your password to contain special characters? Answer YES or NO.");
  if (promptSpecial === "yes" || promptSpecial === "YES" || promptSpecial === "Yes"){
    var confirmYes = window.confirm("Are you sure you want to include uppercase characters?");

    if (confirmYes) {
      passwordChar += specialChar;
    }
  }

  for (var i = 0; i < passwordLengthUser; i++) {
    password = passwordChar [Math.floor(Math.random() * passwordChar.length)]
  }

  function writePassword() {
    var password = generatePassword();
    var pwTextArea = document.getElementById("#password");
    pwTextArea.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
