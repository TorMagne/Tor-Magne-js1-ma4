const form = document.querySelector('#contactForm');
const lastName = document.querySelector('#lastName');
const lastNameError = document.querySelector('#lastNameError');

function validateForm(event) {
  event.preventDefault();

  if (lengthCheck(lastName.value, 4) === true) {
    lastNameError.style.display = 'none';
  } else {
    lastNameError.style.display = 'block';
  }
}

form.addEventListener('submit', validateForm);

function lengthCheck(value, leng) {
  if (value.trim().length > leng) {
    return true;
  } else {
    return false;
  }
}
