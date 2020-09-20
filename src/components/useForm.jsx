import { useState } from "react";


const useForm = validate => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""

  });

  const [errors, setErrors] = useState({});
  

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
    
  };

  
   
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;