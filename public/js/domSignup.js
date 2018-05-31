var userName = document.querySelector('#userName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var errorMessage = document.querySelector('#formError');
var formSubmit = document.querySelector('#formSubmit');



//General function
function createErrorEventListener(element, errorCondition,  errorMsg) {
  element.addEventListener('blur', function(event) {
    var value = event.target.value;
    if (errorCondition(value)) {
      errorMessage.textContent = '';
    } else {
      errorMessage.textContent = errorMsg;
    }
  });
};


//Username validation
var usernameValidation = function(value){
 return RegExp('^[a-zA-Z_]*$').test(value)
};

//password validation
var passwordValidation = function(value){
  return value.length === 0 || RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(value)
};

//email validation
var emailValidation = function(value){
  return value.length === 0 || RegExp(/\S+@\S+\.\S+/).test(value)
};


//username validation test
createErrorEventListener(userName, usernameValidation, 'Names cannot contain numbers or special characters');
//password test
createErrorEventListener(password, passwordValidation,  'Password should contain capital letters and numbers');
//email test
createErrorEventListener(email, emailValidation,  'Invalid email');
