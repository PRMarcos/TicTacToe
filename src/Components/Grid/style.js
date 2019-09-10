import styled from "styled-components";

export const StyledGrid = styled.div`
  background-color: rgb(50, 255, 150);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  height: 300px;
  width: 300px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  justify-content: center;
  align-content: center;
  border-radius: 7px;
`;

export const StyledGridSpot = styled.div`
  background-color: ${props =>
    props.winner === undefined ? "white" : "rgb(255, 200, 200);"};
  font-weight: bold;
  font-size: 30px;
  display: flex;
  height: 85px;
  width: 85px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const StyledGridFlex = styled.div`
  border: 1px solid red;
  background-color: rgb(50, 255, 150);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  height: 150px;
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  border-radius: 7px;

  div {
    border: 1px solid red;
    background-color: white;

    font-weight: bold;
    font-size: 30px;
    display: flex;

    align-items: center;
    justify-content: center;
    border-radius: 7px;

    :hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;
