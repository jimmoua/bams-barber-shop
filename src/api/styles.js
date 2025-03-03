import axios from "axios";
import apiUri from "./apiUri";

export async function updateStyle(body) {
  let retCode;
  try {
    retCode = (await axios.post(`${apiUri}/api/styles/update`, body, { withCredentials: true })).status;
  } catch (err) {
    console.error(err);
    retCode = err?.response?.status;
  }
  return retCode || 500;
}

export async function deleteStyle(key) {
  let retCode;
  let body = { key };
  try {
    retCode = (await axios.post(`${apiUri}/api/styles/delete`, body, { withCredentials: true })).status;
  } catch(err) {
    retCode = err?.response?.status;
  }
  return retCode || 500;
}

export async function fetchStyles() {
  const { data } = await axios.get(`${apiUri}/api/styles`);
  return data;
}

export async function fetchStyle(key) {
  const { data } = await axios.get(`${apiUri}/api/styles?key=${key}`);
  return data;
}

export async function addStyle(newStyle) {
  let retCode;
  try {
    retCode = (await axios.post(`${apiUri}/api/styles/add`, newStyle, { withCredentials: true })).status;
  } catch (err) {
    retCode = err?.response?.status;
  }
  return retCode || 500;
}
