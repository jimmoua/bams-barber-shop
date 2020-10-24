import axios from "axios";
import apiUri from "./apiUri";

export async function updateStyle(body) {
  let retCode;
  try {
    retCode = (await axios.post(`${apiUri}/api/styles/update`, body, { withCredentials: true })).status;
  } catch (err) {
    console.error(err);
    retCode = err.status;
  }
  return retCode;
}

export async function deleteStyle(key) {
  let retCode;
  let body = { key };
  try {
    retCode = (await axios.post(`${apiUri}/api/styles/delete`, body, { withCredentials: true })).status;
  } catch(err) {
    alert(err);
    retCode = err.status;
  }
  return retCode;
}
