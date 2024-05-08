import axios from "axios";

export async function join(email: string, username: string, password: string) {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/join`, {
    email,
    username,
    password,
  });
  return response.data.message;
}
