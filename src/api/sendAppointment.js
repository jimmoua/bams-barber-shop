import axios from "axios";
import apiUri from "./apiUri";

/**
 * @function sendData
 * 
 * @param {Object} service - is the service style they choose. Needs to contain styleName, price, and ect
 * @param {Date} date - an ISO 8601 date string in which the appointment time is
 * @param {Object} formDetails - contails mobile number, email, first and last name, and additional notes.
 * 
 * @description
 * Sends data to the backend
 */
async function sendData({ service, date, formDetails }) {
  const appointmentData = { service, date, formDetails };
  const response = await axios.post(`${apiUri}/api/appointments`, appointmentData);
  return response;
}

export default sendData;
