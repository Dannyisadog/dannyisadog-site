import axios from "axios";

export const fetchData = ({ url, method = "GET", data, responseType = 'json' }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data,
      responseType
    }).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
}