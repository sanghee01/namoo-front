import styled from "styled-components";
import HistoryChart from "../../components/HistoryChart";
import { useEffect } from "react";
import { useGetPlantHistoryData } from "../../hooks/useGetPlantHistoryData";
import { useRecoilValue } from "recoil";
import { plantHistoryState } from "../../state/plantState";

const History = () => {
  const getPlantHistoryData = useGetPlantHistoryData();
  const plantHistoryData = useRecoilValue(plantHistoryState);

  useEffect(() => {
    if (plantHistoryData.length === 0) {
      getPlantHistoryData();
    } else {
      // 3분마다 식물 데이터 업데이트 요청
      setTimeout(() => {
        getPlantHistoryData();
      }, 18000);
    }
  }, [getPlantHistoryData, plantHistoryData]);

  const dateList = plantHistoryData.map((data) => data.createdDate);
  const tempList = plantHistoryData.map((data) => data.temp);
  const humidityList = plantHistoryData.map((data) => data.humidity);
  const soilHumidityList = plantHistoryData.map((data) => data.soilHumidity);
  const lightList = plantHistoryData.map((data) => data.light);
  const remainingWaterList = plantHistoryData.map((data) => data.remainingWater);
  // const gaveWaterList = plantHistoryData.map((data) => data.gaveWater);

  return (
    <Container>
      <h3>식물 히스토리</h3>
      <HistoryChart
        dataName="온도(°C)"
        min={0}
        max={30}
        dataList={dateList}
        value={tempList}
        borderColor="#ff7e5d"
        backgroundColor="#f1ad9c"
      />
      <HistoryChart
        dataName="습도(%)"
        min={0}
        max={100}
        dataList={dateList}
        value={humidityList}
        borderColor="#8ebbf5"
        backgroundColor="#c0d9f5"
      />
      <HistoryChart
        dataName="토양 습도"
        min={0}
        max={1000}
        dataList={dateList}
        value={soilHumidityList}
        borderColor="#c27203"
        backgroundColor="#d7c4a7"
      />
      <HistoryChart
        dataName="조도"
        min={0}
        max={2000}
        dataList={dateList}
        value={lightList}
        borderColor="#ffd000"
        backgroundColor="#fffed3"
      />
      <HistoryChart
        dataName="남은 물 양"
        min={0}
        max={3000}
        dataList={dateList}
        value={remainingWaterList}
        borderColor="#1f75ff"
        backgroundColor="#a4b3ff"
      />
      {/* <HistoryChart
        dataName="물주기 여부"
        min={0}
        max={1}
        dataList={dateList}
        value={gaveWaterList}
        borderColor="#37373b"
        backgroundColor="#959595"
      /> */}
    </Container>
  );
};

export default History;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-bottom: 100px;
  h3 {
    padding: 30px 0;
  }
  canvas {
    margin-bottom: 30px;
  }
`;
