import axios from "axios";

export async function resendMail(email: string) {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/activate/resend`, {
    email,
  });
  return response.data.message;
}
