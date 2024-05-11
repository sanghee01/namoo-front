import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../state/userState";

// 로그인 상태일 때 홈 페이지로 리다이렉트하는 커스텀 훅
export function useRedirectIfLoggedIn() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  useEffect(() => {
    // 사용자가 로그인 상태이면 홈 페이지로 리다이렉트
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);
}
