import axios from "axios";

export async function changePassword(
  password: string,
  passwordConfirm: string,
  email: string | null,
  uuid: string | null,
) {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/password/change`, {
    password,
    passwordConfirm,
    email,
    uuid,
  });
  return response.data.message;
}
