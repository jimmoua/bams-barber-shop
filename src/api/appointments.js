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

/**
 * @function appointmentCancel
 * 
 * @param {String} dateKey The iso 8601 date key used for identifying the appointment
 * 
 * @description
 * Will return http status 200 to denote that a confirmation text was sent to
 * the user. Otherwise will return something else.
 */
export async function appointmentCancel(dateKey) {
  let response;
  try {
    response = await axios.delete(`${apiUri}/api/appointments?dateKey=${dateKey}`, { withCredentials: true });
  } catch (err) {
    console.error(err);
    return err?.response?.status;
  }
  return response.status;
}
