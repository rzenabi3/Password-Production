// Assignment Code
var password = document.getElementById("password");

// Write password to the #password input
function genPassword() {
  var chars= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordlength= 8;
  var passwordText = '';

  for (var i = 0; i <= passwordlength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    passwordText += chars.substring(randomNumber, randomNumber +1);
  }

  //  document.getElementById("password").innerText =passwordText;
password.value = passwordText
}

// Add event listener to generate button
password.getElementById("click", genPassword);
