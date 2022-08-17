import axios from "axios";
import React from "react";

export const allRole = async () => {
  return axios
    .get(`${API}/roles/allRole`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error.response.data.msg));
};
