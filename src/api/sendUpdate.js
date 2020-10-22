import axios from "axios";
import apiUri from "./apiUri";

async function sendUpdate(body) {
  let retCode;
  try {
    retCode = (await axios.post(`${apiUri}/api/styles/update`, body, { withCredentials: true })).status;
  } catch (err) {
    console.error(err);
    retCode = err.status;
  }
  return retCode;
}

export default sendUpdate;
