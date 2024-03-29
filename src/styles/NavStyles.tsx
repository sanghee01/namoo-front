import styled from "styled-components";

export const Tabs = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Tab = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8cd57e;
  width: 25%;
  height: 100%;

  span {
    font-size: 0.9rem;
    margin-top: 3px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
