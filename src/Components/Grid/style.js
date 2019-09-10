import styled from "styled-components";

export const StyledGrid = styled.div`
  background-color: rgb(50, 255, 150);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  height: 300px;
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  border-radius: 7px;
`;

export const StyledGridSpot = styled.div`
  background-color: ${props =>
    props.winner === undefined ? "white" : "rgb(255, 200, 200);"};
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }
`;
