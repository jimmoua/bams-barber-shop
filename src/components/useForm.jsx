import react from "react";
import axios from "axios";
import apiUri from "../helpers/apiUri";

const useForm = (callback, validate) => {
  const [values, setValues] = react.useState({
    email: "",
    phone: "",
    password: "",
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`${apiUri}/api/register`, {
      email: values.email,
      password: values.password,
      password2: values.password2
    }, {
      headers: {
        "content-type": "application/json"
      }
    }).then(response => {
      console.log(`Status is: ${response.status}`);
      console.log(response.data);
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
