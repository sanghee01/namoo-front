import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Postcode from "../../components/Postcode";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/userState";
import { warningAlert, successAlert } from "../../components/Alert";
import { usePlantList } from "../../hooks/useGetPlantList";


const AddPlant = () => {
  // 상태 선언: 주소, 우편번호, 상세주소
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedPlant, setSelectedPlant] = useState("");
  const [plantName, setPlantName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  // Recoil을 통해 userState에서 사용자 정보 가져오기
  const user = useRecoilValue(userState);
  const fetchPlantList = usePlantList(); // usePlantList 훅 사용

  

  useEffect(() => {
    if (user) {
      setUserName(user.username); // username 설정
      setAccessToken(user.accessToken); // accessToken 설정
    }
  }, [user]); // user 상태가 변경될 때마다 실행

  // 주소와 우편번호를 설정하는 함수
  const handleSelectAddress = (fullAddress: string, zonecode: string) => {
    setPostcode(zonecode);
    setAddress(fullAddress);
  };

  const handleSubmit = async () => {
    try {
      const addPlant = {
        itemId: selectedPlant,
        plantName: plantName,
        userName: userName,
        address: {
          street: address,
          zipcode: postcode,
          specify: detailAddress,
        },
        count: 1,
      };

      const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/orders`, addPlant, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 토큰을 헤더에 추가
        },
      });

      console.log(response.data); // 성공 응답 처리
      await fetchPlantList(); // 식물 리스트를 최신 상태로 업데이트
      await successAlert("식물 입양 완료!");
      navigate("/myplant"); // 성공 후 처리 로직 (예: 알림 표시, 페이지 이동 등)
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  };

  return (
    <AddPlantBackGround>
      <Header>
        <Text>식물 입양 동의서</Text>
      </Header>
      <SubText>01 식물 선택</SubText>
      <SelectPlant>
        <PlantCardBox>
          <PlantCard onClick={() => setSelectedPlant("1")} $isSelected={selectedPlant === "1"}>
            <ImgBox>
              <PlantImg src="/assets/images/plant.png" alt="plant" />
              <Name>상추</Name>
            </ImgBox>
          </PlantCard>
          <PlantCard onClick={() => setSelectedPlant("2")} $isSelected={selectedPlant === "2"}>
              <ImgBox>
                <StrawberryImg src="/assets/images/onion.png" alt="onion" />
                <Name>양파</Name>
              </ImgBox>
          </PlantCard>
          </PlantCardBox>
          <PlantCardBox>
            <PlantCard onClick={() => setSelectedPlant("3")} $isSelected={selectedPlant === "3"}>
              <ImgBox>
                <StrawberryImg src="/assets/images/greenOnion.png" alt="greenOnion" />
                <Name>대파</Name>
              </ImgBox>
            </PlantCard>
            <PlantCard onClick={() => setSelectedPlant("4")} $isSelected={selectedPlant === "4"}>
              <ImgBox>
                <StrawberryImg src="/assets/images/strawberry.png" alt="strawberry" />
                <Name>딸기</Name>
              </ImgBox>
            </PlantCard>
          </PlantCardBox>
        
      </SelectPlant>
      <NameContainer>
        <NameBox>
          <SubText>02 식물 이름</SubText>
          <ShortInput
            type="text"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            placeholder="식물 이름"
          />
        </NameBox>
        <NameBox>
          <SubText>03 받으실 분</SubText>
          <ShortInput
            type="text"
            placeholder="받으실 분"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </NameBox>
      </NameContainer>
      <SubText>04 배송지 주소</SubText>
      <PostcodeContainer>
        <ShortInput type="text" placeholder="우편번호" value={postcode} readOnly />
        <Postcode onSelectAddress={(addr, code) => handleSelectAddress(addr, code)} />
      </PostcodeContainer>
      <Input type="text" placeholder="주소" value={address} readOnly />
      <Input
        type="text"
        placeholder="상세주소를 입력하세요"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
      />

      <BtnContainer>
        <Button onClick={handleSubmit}>동의합니다</Button>
      </BtnContainer>
    </AddPlantBackGround>
  );
};

export const AddPlantBackGround = styled.div`
  flex: 1;
  position: relative;
  background-color: #fffaed;
  background-size: cover;
  height: 100%;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  height: 10%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SubText = styled.p`
  font-size: 15px;
  font-weight: medium;
  display: flex;
  padding: 0px 0px 0px 25px;

  @media screen and (max-width: 600px) {
    padding: 0px 0px 0px 25px;
  }
`;

export const SelectPlant = styled.div`
  width: 100%;
  padding: 5px;
`;

export const PlantCardBox = styled.div`
  display : flex;
  flex-direction : row;
`

export const PlantCard = styled.div<{ $isSelected: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 60%;
  border-radius: 30px;
  background-color: #feefc6;
  margin: 10px;
  border: ${({ $isSelected }) => ($isSelected ? "2px solid #f0e68c" : "none")};

  &:hover {
    border: 2px solid #f0e68c;
    cursor: pointer;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

export const PlantImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px;

  @media screen and (max-width: 600px) {
    width: 120px;
    height: 120px;
    margin: 10px;
  }
`;

export const StrawberryImg = styled.img`
  height: 150px;
  margin: 10px;

  @media screen and (max-width: 600px) {
    height: 150px;
    margin: 10px;
  }
`;
export const NameBox = styled.div``;

export const NameContainer = styled.div`
  display: flex;
  justify-content: start;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

export const Name = styled.span`
  margin: 5px 5px 0px 5px;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    margin: 5px 5px 0px 5px;
  }
`;

export const Input = styled.input`
  padding: 15px;
  margin: 10px 5px 10px 25px;
  height: 45px;
  width: 490px;
  border-radius: 15px;
  border: 2px solid gray;

  @media screen and (max-width: 600px) {
    padding: 15px;
    margin: 10px 5px 10px 25px;
    height: 45px;
    width: 340px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    padding: 12px;
  }
`;

export const Button = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;

  cursor: pointer;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  /* 크기 */
  height: 2.5rem;
  font-size: 1rem;

  /* 색상 */
  background: #008a4c;
  &:hover {
    background: #006400;
  }
  &:active {
    background: #2e8b57;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const PostcodeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShortInput = styled(Input)`
  width: 230px;
  margin-right: 10px;

  @media screen and (max-width: 600px) {
    width: 150px;
    margin-right: 10px;
  }
`;

export default AddPlant;
