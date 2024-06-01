import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../state/userState";
import { useSetRecoilState } from "recoil";
import { questState } from "../state/questState";
import { successAlert, warningAlert } from "../components/Alert";

export function useGetQuest() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const setQuest = useSetRecoilState(questState);

  const getQuest = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/quest/weekly`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setQuest(response.data.content);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return getQuest;
}

export function useAcceptQuest() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const acceptQuest = async (questId: number) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_APIADDRESS}/quest/weekly/accept`,
        {
          questId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      await successAlert(response.data.message);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return acceptQuest;
}

export function useCompleteQuest() {
  const user = useRecoilValue(userState);
  const accessToken = user?.accessToken;

  const completeQuest = async (questId: number) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_APIADDRESS}/quest/weekly/complete`,
        {
          questId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      successAlert(response.data.message);
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };
  return completeQuest;
}
