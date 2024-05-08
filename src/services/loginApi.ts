import axios from "axios";

interface LoginResponse {
  username: string;
  email: string;
  token: string;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/login`, {
    email,
    password,
  });
  return response.data.content;
}
