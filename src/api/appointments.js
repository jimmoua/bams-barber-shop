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

export async function appointmentCancelEmployee(dateKey) {
  let response;
  try {
    response = await axios.delete(`${apiUri}/api/appointments?dateKey=${dateKey}&employee=true`, { withCredentials: true });
  } catch (err) {
    console.error(err);
    return err?.response?.status || 500;
  }
  return response.status;
}

export async function appointmentConfirmDelete(key) {
  let response;
  try {
    response = await axios.delete(`${apiUri}/api/appointments?confirmCode=${key}`, { withCredentials: true });
  } catch (err) {
    console.error(err);
    return err?.response?.status;
  }
  return response.status;
}

export async function fetchAppointmentTimeSlots(year, month, date) {
  let response;
  try {
    response = await axios.post(`${apiUri}/api/appointments/timeslots`, {
      year, month, date
    },
    {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
  return response?.data?.slots || [];
}

/**
 * 
 * @param {Date} date a JavaScript date object
 */
export async function getAppointmentByDate(date) {
  let response;
  try {
    response = await axios.get(`${apiUri}/api/appointments?date=${date.toISOString()}`);
  } catch (err) {
    console.error(err);
  }
  return response?.data || [];
}

export async function toggleAppointmentComplete(date) {
  let response;
  try {
    response = await axios.patch(`${apiUri}/api/appointments`, {
      date
    }, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
    return response?.status || 500;
  }
  return response.status;
}
