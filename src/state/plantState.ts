import { atom } from "recoil";
interface Plant {
  id: number;
  name: string;
  exp: number;
  plantType: string;
  uuid: string;
  giveWater: boolean;
  createDate: string;
}

// plantListState 정의
export const plantState = atom<Plant[]>({
  key: "plantListState",
  default: [], // 초기값
});
