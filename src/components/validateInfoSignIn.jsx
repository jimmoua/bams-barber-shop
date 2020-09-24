export default function validateInfo(values) {
  let errors = {};
    
  
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  

  if (!values.password1) {
    errors.password1 = "Password is required";
  } else if (values.password1.length < 6) {
    errors.password1 = "Password needs to be 6 characters or more";
  }
    
    
  return errors;
}