import axios from "axios";
import apiUri from "./apiUri";

async function fetchStyles() {
  const { data } = await axios.get(`${apiUri}/api/styles`);
  return data;
}

export default fetchStyles;
