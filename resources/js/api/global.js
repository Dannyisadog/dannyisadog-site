import { fetchData } from "../utility/api"

export const fetchUser = () =>
  fetchData({
    url: "/getUserData",
  });