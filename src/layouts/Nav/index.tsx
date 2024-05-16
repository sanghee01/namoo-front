import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { ImLeaf } from "react-icons/im";
import { Tabs, Tab, Footer } from "./styles";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/userState";
import { plantState } from "../../state/plantState";

const Nav = () => {
  const user = useRecoilValue(userState);
  const plant = useRecoilValue(plantState);
  return (
    <>
      {/* 로그인 전 페이지면 탭 안보이게, 식물 데이터가 없을 때는 Tabs 배경색깔만 보이도록 */}
      {user && plant.name ? (
        <Tabs>
          <Tab>
            <Link to="/home">
              <AiFillHome size="40" />
              <span>홈</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/chat">
              <BsChatDotsFill size="40" />
              <span>채팅</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/history?page=0?sort=temp">
              <BsBarChartFill size="40" />
              <span>기록</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/myplant">
              <ImLeaf size="40" />
              <span>프로필</span>
            </Link>
          </Tab>
        </Tabs>
      ) : user && !plant.name ? (
        <Footer>
          <img src="../public/assets/images/logo1.png" />
        </Footer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Nav;
