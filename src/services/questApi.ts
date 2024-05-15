import axios from "axios";

export async function getQuest() {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/quest/weekly`, {});

  return response.data.content;
}

export async function acceptQuest(questId: number) {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/quest/weekly/accept`, {
    questId,
  });

  return response.data.message;
}

export async function completeQuest(questId: number) {
  const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/quest/weekly/complete`, {
    questId,
  });

  return response.data.message;
}
