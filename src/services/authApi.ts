import axios from "axios";

interface LoginResponse {
  username: string;
  // 필요한 추가적인 응답 타입 정의
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/login`, {
    email,
    password,
  });
  return response.data.content;
}
