import axios from "axios";

export async function giveWaterToPlant(plantId: number) {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant/${plantId}/water`, {});

  return response.data.content;
}
