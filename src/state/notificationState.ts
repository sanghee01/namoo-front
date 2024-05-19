import { atom } from "recoil";

interface Notification {
  id: number;
  description: string;
  link: string;
  isRead: boolean;
  notificationType: string;
  createdDate: string;
}

export const notificationState = atom<Notification[]>({
  key: "notificationState",
  default: [],
});
