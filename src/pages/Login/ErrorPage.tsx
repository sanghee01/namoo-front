import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRedirectIfLoggedIn } from "../../hooks/useRedirectIfLoggedIn";

function ErrorPage() {
  useRedirectIfLoggedIn(); // 로그인 상태면 /home으로 redirect 되도록 하는 함수

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");

    if (message) {
      alert("로그인에 실패했습니다");
      navigate("/login");
    }
  }, [location, navigate]);

  return <div>로그인 실패</div>;
}

export default ErrorPage;
