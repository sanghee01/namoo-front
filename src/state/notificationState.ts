import { atom } from "recoil";

interface Notification {
  id: number;
  description: string;
  link: number;
  read: boolean;
  notificationType: string;
  createdDate: string;
}

export const notificationState = atom<Notification[]>({
  key: "notificationState",
  default: [],
});
