
$(document).ready(function () {
    $(".sk-folding-cube").fadeOut(50, function () {
        $("#loading").fadeOut(50, function () {
            $("body").css("overflow", "auto");
        })
    })
    
});
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const userAge = document.getElementById('userAge');
const userPassword = document.getElementById('userPassword');
const rePassword = document.getElementById('rePassword');
const myButton = document.getElementById('btn');
const nameAlert = document.getElementById('nameAlert');
const emailAlert = document.getElementById('emailAlert');
const phoneAlert = document.getElementById('phoneAlert');
const ageAlert = document.getElementById('ageAlert');
const passwordAlert = document.getElementById('passwordAlert');
const rePasswordAlert = document.getElementById('rePasswordAlert');


// Regular expression patterns for each input field
let nameRegex = new RegExp('^[^0-9]+$');
let emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
let phoneRegex = new RegExp('^(01)(0|1|2|5)[0-9]{8}$');
let ageRegex = new RegExp('^0*(?:[1-9][0-9]?|100)$');
let passwordRegex = new RegExp('^([0-9]{1,}|[a-zA-Z]{1,}){8,}$');

// Add an event listener to each input field
userName.addEventListener('input', checkInputField1);
userEmail.addEventListener('input', checkInputField2);
userPhone.addEventListener('input', checkInputField3 );
userAge.addEventListener('input', checkInputField4 );
userPassword.addEventListener('input', checkInputField5);
rePassword.addEventListener('input', checkInputField6);

function checkInputField1() {
    const inputValue = userName.value;
    const isInputValid = nameRegex.test(inputValue);
    displayAlertMessage(nameAlert, isInputValid);
    enableDisableButton();
  }
function checkInputField2() {
    const inputValue = userEmail.value;
    const isInputValid = emailRegex.test(inputValue);
    displayAlertMessage(emailAlert, isInputValid);
    enableDisableButton();
  }
function checkInputField3() {
    const inputValue = userPhone.value;
    const isInputValid = phoneRegex.test(inputValue);
    displayAlertMessage(phoneAlert, isInputValid);
    enableDisableButton();
  }
function checkInputField4() {
    const inputValue = userAge.value;
    const isInputValid = ageRegex.test(inputValue);
    displayAlertMessage(ageAlert, isInputValid);
    // enableDisableButton();
  }
function checkInputField5() {
    const inputValue = userPassword.value;
    const isInputValid = passwordRegex.test(inputValue);
    displayAlertMessage(passwordAlert, isInputValid);
    enableDisableButton();
  }
function checkInputField6() {
    const inputValue = rePassword.value;
    const isInputValid = (inputValue == userPassword.value);
    displayAlertMessage(rePasswordAlert, isInputValid);
    enableDisableButton();
  }


  function displayAlertMessage(alertElement, isInputValid) {
    if (isInputValid) {
      alertElement.style.display = 'none';
    } else {
      alertElement.style.display = 'block';
    }
  }

  function enableDisableButton() {
    const isField1Valid = nameRegex.test(userName.value);
    const isField2Valid = emailRegex.test(userEmail.value);
    const isField3Valid = phoneRegex.test(userPhone.value);
    const isField4Valid = ageRegex.test(userAge.value);
    const isField5Valid = passwordRegex.test(userPassword.value);
    const isField6Valid = (userPassword.value == rePassword.value);
    
    if (isField1Valid && isField2Valid && isField3Valid && isField4Valid && isField5Valid && isField6Valid) {
      myButton.removeAttribute('disabled');
    } else {
      myButton.setAttribute('disabled', true);
    }
  }





// function checkInputFields() {
//   const inputValue1 = userName.value;
//   const inputValue2 = userEmail.value;
//   const inputValue3 = userPhone.value;
//   const inputValue4 = userAge.value;
//   const inputValue5 = userPassword.value;
//   const inputValue6 = rePassword.value;
  

//   // Check if all input values match their corresponding regular expression patterns
//   const isInputValid = nameRegex.test(inputValue1) &&
//   emailRegex.test(inputValue2) &&
//   phoneRegex.test(inputValue3) &&
//   ageRegex.test(inputValue4) &&
//   passwordRegex.test(inputValue5) &&
//   (inputValue5 == inputValue6);


//     if (nameRegex.test(inputValue1))
//     {
//         $("#nameAlert").addClass('d-none')
//     }
//     else {
//         $("#nameAlert").removeClass('d-none')
//     }
//     //////////////////////////////////////////////////
//     if (emailRegex.test(inputValue2))
//     {
//         $("#emailAlert").addClass('d-none')
//     }
//     else {
//         $("#emailAlert").removeClass('d-none')
//     }
//     //////////////////////////////////////////////////
//     if (phoneRegex.test(inputValue3))
//     {
//         $("#phoneAlert").addClass('d-none')
//     }
//     else {
//         $("#phoneAlert").removeClass('d-none')
//     }
//     //////////////////////////////////////////////////
//     if (ageRegex.test(inputValue4))
//     {
//         $("#ageAlert").addClass('d-none')
//     }
//     else {
//         $("#ageAlert").removeClass('d-none')
//     }
//     //////////////////////////////////////////////////
//     if (passwordRegex.test(inputValue5))
//     {
//         $("#passwordAlert").addClass('d-none')
//     }
//     else {
//         $("#passwordAlert").removeClass('d-none')
//     }
//     ////////////////////////////////////////////////
//     if (inputValue5 == inputValue6)
//     {
//         $("#rePasswordAlert").addClass('d-none')
//     }
//     else {
//         $("#rePasswordAlert").removeClass('d-none')
//     }
    


//   // Enable or disable the button based on input validity
//   if (isInputValid) {
//     myButton.removeAttribute('disabled');
    
//   } else {
//     myButton.setAttribute('disabled', true);
    
//   }
// }