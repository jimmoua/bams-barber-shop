import apiUri from "./apiUri";
import axios from "axios";

/**
 * 
 * @param {String} nonce - nonce id string
 * @param {String} price - price of the style (must represent string)
 */
export async function createPayment(nonce, price) {
  const { data } = await axios.post(`${apiUri}/api/payment`, {
    price,
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
