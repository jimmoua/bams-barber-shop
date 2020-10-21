import axios from "axios";
import apiUri from "./apiUri";

async function sendUpdate(body) {
  let info;
  try {
    const { status } = await axios.post(`${apiUri}/api/styles/update`, body, { withCredentials: true });
    alert(status);
  } catch (err) {
    console.error(err);
  }
  return info;
}

export default sendUpdate;
