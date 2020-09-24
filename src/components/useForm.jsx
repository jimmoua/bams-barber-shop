import react from "react";
import axios from "axios";
import apiUri from "../helpers/apiUri";


const useForm = (callback, validate) => {
  const [values, setValues] = react.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password1: "",
    password2: ""
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

    
    axios.post(`${apiUri}/api/register`, { values })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

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