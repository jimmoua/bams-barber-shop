<<<<<<< HEAD
import react from "react";


const useForm = (callback, validate) => {
  const [values, setValues] = react.useState({
=======
import { useState, useEffect } from "react";


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
>>>>>>> 951b683d674fc4b9046e3a7ac8fa36b0320d8c5e
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""

  });

<<<<<<< HEAD
  const [errors, setErrors] = react.useState({});
  const[isSubmitting, setIsSubmitting] = react.useState (false);
=======
  const [errors, setErrors] = useState({});
  const[isSubmitting, setIsSubmitting] = useState (false);
>>>>>>> 951b683d674fc4b9046e3a7ac8fa36b0320d8c5e
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

<<<<<<< HEAD
  react.useEffect(() => {
=======
  useEffect(() => {
>>>>>>> 951b683d674fc4b9046e3a7ac8fa36b0320d8c5e
    if(Object.keys(errors).length === 0 && 
    isSubmitting) {
      callback();
    }
  }, [errors]
  );

  
   
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;