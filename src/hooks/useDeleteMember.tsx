import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../state/authState";

export function useDeleteMember() {
  const user = useRecoilValue(userState);
  const token = user?.token;

  const deleteMember = async (password: string) => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_APIADDRESS}/member`, {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰 정보를 헤더에 포함
      },
      data: {
        password, // 비밀번호를 본문에 담음
      },
    });
    return response.data.message;
  };

  return deleteMember;
}
