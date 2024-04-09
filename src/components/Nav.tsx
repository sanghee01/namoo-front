import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { ImLeaf } from "react-icons/im";
import { Tabs, Tab } from "../styles/NavStyles";

const Nav = () => {
  return (
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
        <Link to="/history">
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
  );
};

export default Nav;
