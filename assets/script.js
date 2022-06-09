// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  // Custom object for the characters, must include lower and upper case letters, numbers, and specials
  var password = "";
  var passwordChar = "";
  var characters = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvqxyz",
    number: "1234567890",
    special: "!@#$%^&*_-+="
  }

  // When generate button is clicked, bring up prompt to ask character limit, 8-128
  var passwordLength = prompt("What is the length of your password? Must be between 8 and 128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password can only contain a character limit between 8 and 128."); 
    return generatePassword();
  } else {
    console.log(passwordLength);
  }

  // Upper case prompt
  var confirmUpperCase = window.confirm("Would you like your password to contain uppercase characters?");
  if (confirmUpperCase) {
    var confirmYes = window.confirm("Are you sure you wish to use upper case letters?");
    if (confirmYes) {
      passwordChar += characters.upper;
      console.log("Confirmed Upper Case: " + confirmUpperCase);
    }
  }

  // Lower case prompt
  var confirmLowerCase = window.confirm("Would you like your password to contain lowercase characters?");
  if (confirmLowerCase) {
    var confirmYes = window.confirm("Are you sure you wish to use lower case letters?");
    if (confirmYes) {
      passwordChar += characters.lower;
      console.log("Confirmed Lower Case: " + confirmLowerCase);
    }
  }

  // Numbers prompt
  var confirmNumber = window.confirm("Would you like your password to contain numbers?");
  if (confirmNumber) {
    var confirmYes = window.confirm("Are you sure you wish to use numbers?");
    if (confirmYes) {
      passwordChar += characters.number;
      console.log("Confirmed Numbers: " + confirmNumber);
    }
  }

  // Specials prompt
  var confirmSpecial = window.confirm("Would you like your password to contain special characters?");
  if (confirmSpecial) {
    var confirmYes = window.confirm("Are you sure you wish to use special characters?");
    if (confirmYes) {
      passwordChar += characters.special;
      console.log("Confirmed Special Characters: " + confirmSpecial);
    }
  }
  
  // After prompts are answered, generate the password
  for (var i = 0; i < passwordLength; i++) {
    password +=passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  console.log(passwordChar);
  return password;

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
