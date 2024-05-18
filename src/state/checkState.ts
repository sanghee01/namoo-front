import { atom } from "recoil";

interface Check {
}

export const checkState = atom<Check[]>({
  key: "checkState",
  default: [],
});

export const isCheckedInState = atom({
    key: 'isCheckedInState', // 고유한 key
    default: false, // 기본값
  });