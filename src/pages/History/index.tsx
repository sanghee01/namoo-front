import styled from "styled-components";
import HistoryChart from "../../components/HistoryChart";

const History = () => {
  return (
    <Container>
      <HistoryChart dataName="온도(°C)" min={-30} max={30} borderColor="#ff7e5d" backgroundColor="#f1ad9c" />
      <HistoryChart dataName="습도(%)" min={0} max={100} borderColor="#8ebbf5" backgroundColor="#c0d9f5" />
    </Container>
  );
};

export default History;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;

  canvas {
    margin-bottom: 30px;
  }
`;
