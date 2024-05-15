import { atom } from "recoil";

interface Quest {
  questId: number;
  title: string;
  description: string;
  accepted: boolean;
  completed: boolean;
  goal: number;
  progress: number;
  reward: number;
}

export const questState = atom<Quest[]>({
  key: "questState",
  default: [],
});
