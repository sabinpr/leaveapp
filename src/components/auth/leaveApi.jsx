import { API } from "../../config";
import axios from "axios";

//LEAVES OF USER
export const getLeaveBalance = async () => {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.get(`${API}/leaves/allLeave`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result.data.leaves;
  } catch (error) {
    console.log(error.response.data.msg);
  }
};

//EMPLOYEES ON LEAVE TODAY
export const getTodayLeaves = async () => {
  try {
    const token = localStorage.getItem("token");
    const absentee = await axios.get(`${API}/leaves/leave/absent`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("absentee", absentee);
    return absentee.data.leaves;
  } catch (error) {
    console.log(error.response.data.msg);
  }
};

//GET FUTURE LEAVES
export const getFutureLeaves = async () => {
  try {
    const token = localStorage.getItem("token");
    const comingLeaves = await axios.get(`${API}/leaves/leave/coming/leaves`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("comingLeaves", comingLeaves.data.leaves);
    return comingLeaves.data.leaves;
  } catch (error) {
    console.log(error.response.data.msg);
  }
};

//DELETE LEAVE ACTION FOR ADMIN
export const deleteLeavesAction = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const removeLeaves = await axios.delete(
      `${API}/leaves/deleteLeaves/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return true;
  } catch (error) {
    console.log(error.response.data.msg);
    return false;
  }
};

//UPDATE LEAVE ACTION FOR ADMIN
export const updateLeavesAction = async (id, data) => {
  try {
    const token = localStorage.getItem("token");
    // console.log("updatelkasjd", token);
    const changeLeaves = await axios.put(
      `${API}/leaves/updateLeave/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return changeLeaves.data.leaves;
  } catch (error) {
    console.log(error.response.data.msg);
    return false;
  }
};
