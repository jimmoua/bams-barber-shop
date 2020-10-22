import axios from "axios";
import apiUri from "./apiUri";

const logout = () => {
  axios.post(`${apiUri}/api/logout`, {}, { withCredentials: true })
    .catch(err => {
      console.error(err);
    });
};

export default logout;
