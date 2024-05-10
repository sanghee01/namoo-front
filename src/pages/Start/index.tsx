import Namoo from "../../components/Namoo";
import { useRedirectIfLoggedIn } from "../../hooks/useRedirectIfLoggedIn";

const Start = () => {
  useRedirectIfLoggedIn(); // 로그인 상태면 /home으로 redirect 되도록 하는 함수
  return <Namoo txt1="나만의 무럭이 키우기에" txt2="놀러오신 것을 환영합니다!" navUrl="/login" btnTxt="시작하기" />;
};

export default Start;
