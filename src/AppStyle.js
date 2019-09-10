import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    font-weight: bold;
    margin-bottom: 20px;

    background-color: rgb(50, 255, 150);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

    border-radius: 10px;
    padding: 5px;

    width: 300px;
    text-align: center;
  }

  button {
    padding: 15px;
    border: none;
    width: 300px;
    margin: 20px;
    border-radius: 10px;
    font-size: 16px;
    color: white;
    background-color: rgb(50, 255, 150);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    font-weight: bold;

    :hover {
      background-color: rgb(150, 255, 150);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;
