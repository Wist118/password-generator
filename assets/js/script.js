//global scope variables
var passwordText = document.querySelector("#password");
var charLength = ""
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = ",./<>?;':[]{}-=_+`~!@#$%^&*()";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    charLength = prompt("Please select at least 8 characters and no more than 128 characters");
    charLength = parseInt(charLength);

    if(charLength < 8 || charLength > 128 || isNaN(charLength)) {
    charLength = alert("You need to provide a valid answer! Please try again.");
    return writePassword();
  }

    var lowercase = confirm("Would you like to include lowercase characters?");
    var uppercase = confirm("Would you like to include uppercase characters?");
    var numeric = confirm("Would you like to include nurmeric characters?");
    var special = confirm("Would you like to include special characters?");

  while(!lowercase && !uppercase && !numeric && !special) {
    alert("You must choose at least one character type");
    return confirmChar();
  }
  // character select variable
  var charSelect = ""

  if(lowercase) {
    charSelect = charSelect.concat(lowerChar)
  }

  if(uppercase) {
    charSelect = charSelect.concat(upperChar)
  }

  if(numeric) {
    charSelect = charSelect.concat(numChar)
  }

  if(special) {
    charSelect = charSelect.concat(specialChar)
  }
  // password generator variable
  var generatePassword = ""
    for(var i = 0; i < charLength; i++) {
      generatePassword = generatePassword + charSelect[Math.floor(Math.random() * charSelect.length)];
      console.log(generatePassword);
      passwordText.value = generatePassword;
      }
    }

  //var password = generatePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

