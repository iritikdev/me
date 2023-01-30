import http from "./httpService";
import { devUsername, apiBaseUrl } from "../config.json";

const apiUrl = `${apiBaseUrl}articles?username=${devUsername}`;

function getPostsByUsername() {
  return http.get(apiUrl);
}

export { getPostsByUsername };
