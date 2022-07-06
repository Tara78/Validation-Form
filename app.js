// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// All functions
function validateName() {
  // get the value 
  const name= document.getElementById('name');
  // regular experession (re)- ^ start , between 2-10 charaters
  const re= /^[a-zA-Z]{2,10}$/;

  // Evalute with if statment aand test Method
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  }
  else{
    name.classList.remove('is-invalid');
  }

}

function validateZip() {
  const zip = document.getElementById('zip');
  // regular experession (re)- ^ start , between 0-9 digits  just 5 digits(? , everything inside second () => optional)
  const re = /^[0-9]{5}(-[0-9](4))?$/;

  // Evalute with if statment aand test Method
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  }
  else {
    zip.classList.remove('is-invalid');
  }

}
function validateEmail(){
  const email = document.getElementById('email');
  // regular experession (re)- ^ start , with () make a group
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  // Evalute with if statment aand test Method
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  }
  else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone(e) {
  e.preventDefault();

  const phone = document.getElementById('phone');
  // regular experession (re)- ^ start , between 2-10 charaters
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  // Evalute with if statment aand test Method
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  }
  else {
    phone.classList.remove('is-invalid');
  }
}