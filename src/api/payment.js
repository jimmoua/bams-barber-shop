import apiUri from "./apiUri";
import axios from "axios";

/**
 * 
 * @param {String} nonce - nonce id string
 * @param {String} appointmentDetails - appointment details containing contact information and price
 */
export async function createPayment(nonce, appointmentDetails) {
  const { data } = await axios.post(`${apiUri}/api/payment`, {
    appointmentDetails,
    nonce
  }, {
    withCredentials: true
  }).catch(err => {
    if(err.response) {
      console.log(err.response);
      return {
        data: {
          errors: err.response.data.errors
        }
      };
    }
    return {
      data: []
    };
  });
  return data;
}
