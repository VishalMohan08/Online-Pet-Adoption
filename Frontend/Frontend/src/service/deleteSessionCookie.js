import axios from "axios";
import { deleteRememberMePreference } from "./rememberMe";

export default function DeleteSessionCookie() {
  deleteRememberMePreference();
  
  axios.get("/logout/")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error("Server Error:", error.response.status, error.response.data);
      } else if (error.request) {
        console.error("Network Error:", "The server is not reachable.");
      } else {
        console.error("Error:", error.message);
      }
    });
}

