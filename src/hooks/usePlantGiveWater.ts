import axios from "axios";
import { useRecoilValue } from "recoil";
import { warningAlert } from "../components/Alert";
import { userState } from "../state/userState";

export function usePlantGiveWater() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const giveWater = async (plantId: number) => {
    try {
      await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant/${plantId}/water`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 토큰 정보를 헤더에 포함
        },
      });
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return giveWater;
}
