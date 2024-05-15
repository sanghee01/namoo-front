import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../state/userState";
import { useSetRecoilState } from "recoil";
import { plantListState } from "../state/plantState";

export function usePlantList() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;
  const setPlant = useSetRecoilState(plantListState);

  const plantList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 토큰 정보를 헤더에 포함
        },
      });
      setPlant(response.data.content.slice(0, 4)); // 최대 4개의 식물 정보만 가져옴
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };
  return plantList;
}
