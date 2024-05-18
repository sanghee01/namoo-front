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
  
  // plant.id가 존재하는 경우, URL에 plantId 쿼리 파라미터를 추가
  const profileLink = plant.id ? `/profile?plantId=${plant.id}` : "/myplant";

  return (
    <>
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
            <Link to="/history?page=0&sort=temp">
              <BsBarChartFill size="40" />
              <span>기록</span>
            </Link>
          </Tab>
          <Tab>
            {/* plant.id의 존재 여부에 따라 다른 링크를 사용 */}
            <Link to={profileLink}>
              <ImLeaf size="40" />
              <span>프로필</span>
            </Link>
          </Tab>
        </Tabs>
      ) : user && !plant.name ? (
        <Footer>
          <img src="../assets/images/logo1.png" alt="logo" />
        </Footer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Nav;
