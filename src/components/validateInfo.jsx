export default function validateInfo(values) {
  let errors = {};
  
  if (!values.firstName.trim()) {
    errors.firstName = "First Name required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name required";
  }
  
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone Number is required";
  } else if (values.phone.length !== 10) {
    errors.phone = "Enter a valid phone number";
  }
  
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password1) {
    errors.password2 = "Passwords do not match";
  }
  
  return errors;
}
