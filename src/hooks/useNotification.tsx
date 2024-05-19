import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../state/userState";
import { successAlert, warningAlert } from "../components/Alert";
import { notificationState } from "../state/notificationState";

export function useGetNotification() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const setNotification = useSetRecoilState(notificationState);

  const getNotifiction = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/notification`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setNotification(response.data.content);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return getNotifiction;
}

export function usePatchNotification() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const patchNotifiction = async (notificationId: number) => {
    try {
      console.log("accessToken", accessToken);
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_APIADDRESS}/notification/${notificationId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      console.log(response);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return patchNotifiction;
}

export function useDeleteNotification() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const deleteNotifiction = async (notificationId: number) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_SERVER_APIADDRESS}/notification/${notificationId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      successAlert(response.data.message);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return deleteNotifiction;
}

export function useDeleteAllNotification() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const deleteAllNotifiction = async () => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_SERVER_APIADDRESS}/notification`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      successAlert(response.data.message);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return deleteAllNotifiction;
}
