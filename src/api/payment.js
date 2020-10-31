import apiUri from "./apiUri";
import axios from "axios";

/**
 * 
 * @param {String} nonce - nonce id string
 * @param {String} price - price of the style (must represent string)
 */
export async function createPayment(nonce, price) {
  const { data } = await axios.post(`${apiUri}/api/payment`, {
    price: price,
    nonce: nonce
  }, { withCredentials: true }).catch(err => {
    console.error(err);
  });
  return data;
}
