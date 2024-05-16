import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../state/userState";
import { useSetRecoilState } from "recoil";
import { plantHistoryState } from "../state/plantState";

export function useGetPlantHistoryData() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;
  const setPlantHistory = useSetRecoilState(plantHistoryState);

  const getPlantHistoryData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_APIADDRESS}/plant-history/1?sort=createdDate,desc&page=0`, // 현재 아두이노 기기가 하나라 해당 기기인 plantId가 1인 것에만 요청
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // 토큰 정보를 헤더에 포함
          },
        },
      );
      setPlantHistory(response.data.content.content);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };
  return getPlantHistoryData;
}
