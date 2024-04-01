import { atom } from "recoil";

interface IUser {
  name?: string;
}
export const userState = atom<IUser>({
  key: "userState",
  default: {
    name: "",
  },
});
