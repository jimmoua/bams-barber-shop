import apiUri from "./apiUri";
import axios from "axios";

/**
 * @param {String} phoneNumber phone number
 */
export async function appointmentSearchByPhone(phoneNumber) {
  let response;
  try {
    response = await axios.get(`${apiUri}/api/appointments?phoneNumber=${phoneNumber}`);
  } catch(err) {
    console.error(err);
    return [];
  }
  return response.data;
}
