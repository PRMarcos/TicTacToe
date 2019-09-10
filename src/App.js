import React, { useState } from "react";
import { Grid } from "./Components/Grid";
import { Container } from "./AppStyle";

function App() {
  const [dados, setDados] = useState({
    grid: ["", "", "", "", "", "", "", "", ""],
    winner: [],
    currentPlayer: "X"
  });
  const [GameEnded, setGameEnded] = useState(false);

  function checkSpot(key) {
    return dados.grid[key] !== "" ? false : true;
  }

  function checkWinner(array) {
    if (array[0] === array[1] && array[1] === array[2] && array[0] !== "")
      return [0, 1, 2];
    if (array[3] === array[4] && array[4] === array[5] && array[3] !== "")
      return [3, 4, 5];
    if (array[6] === array[7] && array[7] === array[8] && array[6] !== "")
      return [6, 7, 8];

    if (array[0] === array[3] && array[3] === array[6] && array[0] !== "")
      return [0, 3, 6];
    if (array[1] === array[4] && array[4] === array[7] && array[1] !== "")
      return [1, 4, 7];
    if (array[2] === array[8] && array[8] === array[5] && array[2] !== "")
      return [2, 5, 8];

    if (array[0] === array[4] && array[4] === array[8] && array[0] !== "")
      return [0, 4, 8];
    if (array[2] === array[4] && array[4] === array[6] && array[2] !== "")
      return [2, 4, 6];

    return [];
  }

  function switchPlayer(CurrentPlayer) {
    if (CurrentPlayer === "X") {
      return "O";
    } else {
      return "X";
    }
  }

  function UpdateData(key) {
    let newDados = [...dados.grid];
    newDados[key] = dados.currentPlayer;
    const winner = checkWinner(newDados);
    setDados({
      grid: newDados,
      winner: winner,
      currentPlayer: switchPlayer(dados.currentPlayer)
    });

    if (checkWinner(newDados).length > 0) {
      setGameEnded(true);
    }
  }

  const handleClick = key => {
    if (checkSpot(key) && !GameEnded) {
      UpdateData(key);
    } else {
    }
  };

  function RestartGame() {
    setDados({
      grid: ["", "", "", "", "", "", "", "", ""],
      winner: [],
      currentPlayer: "X"
    });
    setGameEnded(false);
  }
  return (
    <Container>
      {checkWinner(dados.grid).length > 0 ? (
        <h1>Vencedor: {dados.grid[checkWinner(dados.grid)[0]]}</h1>
      ) : (
        <h1>Jogador atual: {dados.currentPlayer}</h1>
      )}

      <Grid data={dados} hc={handleClick} />
      <button onClick={RestartGame}>Reiniciar</button>
    </Container>
  );
}

export default App;
