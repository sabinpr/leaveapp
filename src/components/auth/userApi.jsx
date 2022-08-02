import { API } from "../../config";
import axios from "axios";

//USING AXIOS INSTEAD OF return fetch
export const login = async (user, setCredentials, navigate) => {
  //2ND PARAMETER = TO SET ERROR
  // console.log(setCredentials);
  //user is the data we are sending
  return axios
    .post(`${API}/users/login`, user)
    .then((res) => {
      // console.log(res.data);
      //TO SAVE TOKEN DATA IN LOCAL STORAGE
      localStorage.setItem("token", res.data.token);
      navigate("/");
    })
    .catch((error) => {
      if (error.response.data.msg) {
        console.log(error.response);
        //SETTING ERROR
        setCredentials((prev) => ({ ...prev, error: error.response.data.msg }));

        //TO CLEAR ERROR
        setTimeout(() => {
          setCredentials((prev) => ({ ...prev, error: null }));
        }, 3000);
      }
    });
};

export const logout = async (navigate) => {
  localStorage.clear();
  navigate("/");
};