// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericalChar = "0123456789";
  var specialChar = "!@#$%^&*()/*-<=>;:[]{}";
  var password = "";
  var passwordChar = "";

  // Length of password prompt
  var passwordLengthUser = prompt("What is the length of your desired password? Must be between 8 and 128 characters.");

  if (passwordLengthUser >= 8 && passwordLengthUser <= 128) {
    console.log(passwordLengthUser)
  }

  else {
    alert ("Password must contain at least 8 characters, at most 128 characters!")
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

    // If nothing is entered
    if (!promptLowercase && !promptUppercase && !promptNumbers && !promptSpecial) {
      return alert("At least one criteria must be entered!");
    }
  }

  for (var i = 0; i < passwordLengthUser; i++) {
    password = passwordChar [Math.floor(Math.random() * passwordChar.length)];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
