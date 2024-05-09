import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/authState";

function LoginSuccess() {
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
