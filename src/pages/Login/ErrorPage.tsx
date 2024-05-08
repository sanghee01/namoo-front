import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ErrorPage() {
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
