import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../config";

const Roles = () => {
  const [roleData, setRoleData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${API}/roles/allRole`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setRoleData(res.data.roles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {roleData.map((item, index) => (
        <li key={item.id}>
          {item._id}
          <br />
          {item.role}
        </li>
      ))}
    </>
  );
};

export default Roles;
