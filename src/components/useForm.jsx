import react from "react";


const useForm = (callback, validate) => {
  const [values, setValues] = react.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""

  });

  const [errors, setErrors] = react.useState({});
  const[isSubmitting, setIsSubmitting] = react.useState (false);
  

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

  react.useEffect(() => {
    if(Object.keys(errors).length === 0 && 
    isSubmitting) {
      callback();
    }
  }, [errors]
  );

  
   
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;