import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { userState } from "../state/userState";

const LOCAL_STORAGE_KEY = "userLocal";

// 로컬 스토리지에서 사용자 정보 제거 헬퍼 함수
const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};

// 로그아웃 기능 구현
const useLogout = () => {
  const navigate = useNavigate();
  const [, setUser] = useRecoilState(userState);

  const logout = () => {
    // 1. Recoil 상태 초기화
    setUser(null); // userState를 null로 설정하여 사용자 정보 초기화

    // 2. 로컬 스토리지에서 사용자 정보 제거
    removeFromStorage(LOCAL_STORAGE_KEY);

    navigate("/");
  };

  return logout;
};

export default useLogout;
