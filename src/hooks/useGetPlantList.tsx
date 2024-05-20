import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../state/userState";
import { useSetRecoilState } from "recoil";
import { plantListState, Plant } from "../state/plantState";
import { useCallback } from "react";
import { warningAlert } from "../components/Alert";

export function usePlantList() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;
  const setPlant = useSetRecoilState(plantListState);

  const plantList = useCallback(async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const plants = response.data.content.slice(0, 4).map((plant: Plant) => {
        const plantType = plant.plantType;
        const plantLevel = plant.exp >= 400 ? 4 : plant.exp >= 300 ? 3 : plant.exp >= 200 ? 2 : 1;
        const imgPath =
                plantType === "상추"
                ? `/assets/images/lettuce${plantLevel}.png`
                : plantType === "딸기"
                ? "/assets/images/strawberry.png"
                : plantType === "대파"
                ? "/assets/images/greenOnion.png"
                : "/assets/images/onion.png";

        return { ...plant, imgPath };
      });

      setPlant(plants);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  }, [accessToken, setPlant]);

  return plantList;
}
