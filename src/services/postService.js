import http from "./httpService";
import { devUsername, apiBaseUrl } from "../config.json";

const apiUrl = `${apiBaseUrl}/articles?username=${devUsername}`;

function getPostsByUsername() {
  return http.get(apiUrl);
}

/**
 * @param {https://dev.to/api/articles/1339652} id
 */

function getPostById(id) {
  return http.get(`${apiBaseUrl}/articles/${id}`);
}

export { getPostsByUsername, getPostById };
