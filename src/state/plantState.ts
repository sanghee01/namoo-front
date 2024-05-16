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

interface PlantHistory {
  id: number;
  plantId: number;
  temp: number;
  humidity: number;
  soilHumidity: number;
  remainingWater: number;
  gaveWater: boolean;
  light: number;
  createdDate: string;
}

const { persistAtom } = recoilPersist();

// 식물 리스트
export const plantListState = atom<Plant[]>({
  key: "plantListState",
  default: [], // 초기값
  effects_UNSTABLE: [persistAtom],
});

// 식물 정보
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

// 식물 이미지
export const plantImgState = atom({
  key: "plantImgState",
  default: "/assets/images/lettuce1.png",
});

// 식물 레벨
export const plantLevelState = atom({
  key: "plantLevelState",
  default: 1,
});

// 식물 상태 데이터
export const plantHistoryState = atom<PlantHistory[]>({
  key: "plantHistoryState",
  default: [],

// 식물 오늘의 한마디
export const todayMessageState = atom({
  key: 'todayMessageState',
  default: "아이 촉촉해~",
});
