const Validate = () => {
  let firstName = document.boda.firstname;
  let lastName = document.boda.lastname;
  let model = document.boda.model;
  let numberPlate = document.boda.numberplate;
  let color = document.boda.color;
  let date = document.boda.date;
  let time = document.boda.time;
  let slotnumber = document.boda.slotnumber;
  let nin = document.boda.nin;

  let firstNameError = document.getElementById("firstnameError");
  let lastNameError = document.getElementById("lastnameError");
  let modelError = document.getElementById("modelError");
  let numberPlateError = document.getElementById("numberPlateError");
  let colorError = document.getElementById("colorError");
  let dateError = document.getElementById("dateError");
  let timeError = document.getElementById("timeError");
  let slotnumberError = document.getElementById("slotnumberError");
  let ninError = document.getElementById("ninError");

  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "please provide your firstname";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must be atleast 2 characters long";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length > 15) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "First name should be less than 15 characters";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else {
    firstName.style.border = "2px solid green";
    firstNameError.textContent = "";
    lastName.focus();
  }

  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "please provide your lastname";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length < 2) {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "Last name should be atleast 2 characters long";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.lenth > 15) {
    lastName.style.border = "1px solid red";
    lastNameError.textContent = "Last name should be more than 15 characters";
    lastNameError.style = "color: red; fontsize:11px; font-size:";
  } else {
    lastName.style.border = "2px solid green";
    lastNameError.textContent = "";

    model.focus();
  }

  if (model.value == "") {
    model.style.border = "2px solid red";
    modelError.textContent = "please provide your car model";
    modelError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    model.focus();
    return false;
  } else if (model.value.length < 2) {
    model.style.border = "2px solid red";
    modelError.textContent = "Model should be atleast 2 characters long";
    modelError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    model.focus();
    return false;
  } else {
    model.style.border = "2px solid green";
    modelError.textContent = "";
    numberPlate.focus();
  }
  if (numberPlate.value == "") {
    numberPlate.style.border = "2px solid red";
    numberPlateError.textContent = "please provide your car number plate";
    numberPlateError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    numberPlate.focus();
    return false;
  } else if (numberPlate.value.length < 6) {
    numberPlate.style.border = "1px solid red";
    numberPlateError.textContent =
      "Number plate should not be more than 6 characters";
    numberPlateError.style = "color: red; fontsize:11px; font-size:";
    numberPlate.focus();
    return false;
  } else {
    numberPlate.style.border = "2px solid green";
    numberPlateError.textContent = "";
    color.focus();
  }
  // let numberPlateRegex = ^[A-Z]{3}\s[0-9A-Z]{4}$;

  // let numberPlateRegex = ^[A-Z]{3}\s\d{3}$;

  // let numberPlateRegex = /^[A-Z]{2}[ -]\d{3}[ -][A-Z]{3}$/;

  // let numberPlateRegex = ^[A-Z]{3}\s\d{3}[DE]$;
  // let numberPlateRegex = /^[A-Z]{2,3}\s\d{2,3}$/;
  // let numberPlateRegex = ^U([A-Z0-9]{6})+$
  // if (!numberPlate.value.match(numberPlateRegex)) {
  //   numberPlate.style.border = "2px solid red";
  //   numberPlateError.textContent = "Please provide a valid car number plate";
  //   numberPlateError.style =
  //     "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
  //   numberPlate.focus();
  //   return false;
  // }

  if (color.value == "") {
    color.style.border = "2px solid red";
    colorError.textContent = "please provide your car color";
    colorError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    color.focus();
    return false;
  } else if (color.value.length < 2) {
    color.style.border = "2px solid red";
    colorError.textContent = "Color should be atleast 2 characters long";
    colorError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    color.focus();
    return false;
  } else {
    color.style.border = "2px solid green";
    colorError.textContent = "";
    date.focus();
  }

  if (date.value == "") {
    date.style.border = "2px solid red";
    dateError.textContent = "please provide your date";
    dateError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    date.focus();
    return false;
  } else {
    date.style.border = "2px solid green";
    dateError.textContent = "";
    time.focus();
  }

  if (time.value == "") {
    time.style.border = "2px solid red";
    timeError.textContent = "please provide your time";
    timeError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    time.focus();
    return false;

  }else{
    time.style.border = "2px solid green";
    timeError.textContent = "";
    slotnumber.focus();

  }

  if (slotnumber.value == "") {
    slotnumber.style.border = "2px solid red";
    slotnumberError.textContent = "please provide your slot number";
    slotnumberError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    slotnumber.focus();
    return false;
  }

  const ninRegex = /^CF([a-zA-Z0-9]{12})+$/;
  const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/;

  if (nin.value == "") {
    nin.style.border = "1px solid red";
    ninError.textContent = "NIN is required";
    ninError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    nin.focus();
    return false;
  } else if (!(ninRegex.test(nin.value) || ninRegex2.test(nin.value))) {
    nin.style.border = "1px solid red";
    ninError.textContent = "NIN should look like CFXXXXXXX or CMXXXXXXX";
    ninError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    nin.focus();
    return false;
  } else {
    nin.style.border = "1px solid green";
    ninError.textContent = "";
  }
};
