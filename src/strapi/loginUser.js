import axios from "axios";
import url from "./URL";

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password: password,
    })
    .catch((error) => console.log("There is an error: ", error));

  if (response) {
    //TODO setupUser(response)
  }

  return response;
}

export default loginUser;
