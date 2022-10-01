// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&><?"
    var numbers = /[~!@#$%&*?><]/
    var specChar = ["a", "b", "c", "d", "e", "f", "g",]
    var passwordLength = 0
    var lengthInput = prompt("Please enter a password length", "0")
    
  
    if (lengthInput == null || lengthInput == 0){
      window.alert("Please input a number above 0");
      writePassword();
    } else {
      passwordLength = lengthInput;
      password = "";
      console.log(passwordLength)
      for (let i = 0; i < passwordLength; i++) {
        password += chars.charAt(
          Math.floor(Math.random() * chars.length)
        );
      }
      console.log(password)


      
    }

    if (confirm("Do you want to add numbers?")){



    } else {
      password = password.replace(/[0-9]/g, specChar[Math.floor(Math.random()*specChar.length)]);
      console.log(password)
    }

    if(confirm("Would you like to add special characters?")){

    } else {
      password = password.replace(/[~!@#$%&*?><]/g, specChar[Math.floor(Math.random()*specChar.length)])
      console.log(password)
    }
  
  } 

  if(confirm("Would you like the password to be all caps?")){
    password.textContent.toUpperCase()
    console.log(password);
  }

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
