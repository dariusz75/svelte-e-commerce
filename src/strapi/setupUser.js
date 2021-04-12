import { setStorageUser, setUser } from "../stores/userStore";

function setupUser(response) {
  const { jwt } = response.data;
  const { username } = response.data.user;
  const user = { username: username, token: jwt };
  setStorageUser(user);
  setUser(user);
}

export default setupUser;
