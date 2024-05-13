import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

interface Plant {
  id: number;
  name: string;
  exp: number;
  plantType: string;
  uuid: string;
  giveWater: boolean;
  createDate: string;
}

const { persistAtom } = recoilPersist();

// plantListState 정의
export const plantListState = atom<Plant[]>({
  key: "plantListState",
  default: [], // 초기값
});

// plantState 정의
export const plantState = atom<Plant>({
  key: "plantState",
  default: {
    id: 0,
    name: "",
    exp: 0,
    plantType: "",
    uuid: "",
    giveWater: false,
    createDate: "",
  }, // 초기값
  effects_UNSTABLE: [persistAtom],
});