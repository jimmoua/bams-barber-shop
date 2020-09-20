export default function validateInfo(values) {
  let errors = {};
  
  if (!values.firstName.trim()) {
    errors.firstName = "First Name required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
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
  
  
  return errors;
}