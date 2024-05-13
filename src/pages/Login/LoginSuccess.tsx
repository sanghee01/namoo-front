import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/userState";
import { useRedirectIfLoggedIn } from "../../hooks/useRedirectIfLoggedIn";

function LoginSuccess() {
  useRedirectIfLoggedIn(); // 로그인 상태면 /home으로 redirect 되도록 하는 함수

  const setUser = useSetRecoilState(userState);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get("username");
    const email = searchParams.get("email");
    const token = searchParams.get("token");

    if (token && username && email) {
      setUser({ username, email, token });
      navigate("/home");
    }
  }, [location, navigate, setUser]);

  return <div>로그인 처리 중...</div>;
}

export default LoginSuccess;
