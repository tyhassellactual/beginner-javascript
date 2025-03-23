function checkForm() {
// Get form inputs
const firstName = document.getElementById("firstName").value.trim();
const lastName = document.getElementById("lastName").value.trim();
const email = document.getElementById("email").value.trim();
const favoriteSubject = document.getElementById("favoriteSubject").value;

// set array to store errors
let errors = [];

// check if fields are blank
if (!firstName) {
  errors.push("First name cannot be blank.");
}
if (!lastName) {
  errors.push("Last name cannot be blank.");
}
if (!email) {
  errors.push("Email cannot be blank.");
} else {
  // check for APUS email address format
  const apusEmailPattern = /^[a-zA-Z0-9._%+-]+@mycampus\.edu$/;
  if (!apusEmailPattern.test(email)) {
    errors.push("Please enter a valid APUS email address.");
  }
}
if (favoriteSubject === "") {
  errors.push("Please select your favorite subject.");
}

// display errors or success message
if (errors.length > 0) {
  alert(errors.join("\n"));
  return false;
} else {
  alert("Form submitted successfully!");
  return true;
}
}