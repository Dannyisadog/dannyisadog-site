import { fetchData } from "../utility/api"

export const downloadCV = () =>
  fetchData({
    url: "/downloadCV",
    responseType: 'blob'
  });
