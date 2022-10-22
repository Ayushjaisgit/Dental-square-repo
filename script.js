const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

function validateForm() {
  var name = document.forms['appointment-form']["Patient-Name"].value;
  console.log(name)
  
}


function successFunction() {
  console.log("alert")
  alert(" Thank you! Your Appointment is Submitted Successfully We will Contact You Shortly ");
}

// google docs script

const scriptURL = 'https://script.google.com/macros/s/AKfycbxTfztYB0naQV_6QyZG8oUgzYwBeomRIX_76Fext7k25AlXCX--9wWHasDYpV53_UHr4g/exec'
const form = document.forms['appointment-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
function successFunction() {
  // console.log("alerss")
  alert(" Thank you!Your Appointment is Submitted Successfully");
}
})

$(function(){
var dtToday = new Date();

var month = dtToday.getMonth() + 1;
var day = dtToday.getDate();
var year = dtToday.getFullYear();
if(month < 10)
month = '0' + month.toString();
if(day < 10)
day = '0' + day.toString();

var minDate= year + '-' + month + '-' + day;

$('#txtDate').attr('min', minDate);
});
