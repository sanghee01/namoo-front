import axios from "axios";

export async function resetPassword(email: string) {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/password/reset`, {
    email,
  });
  return response.data.message;
}
