import React, { useState } from "react";
import { Grid } from "./Components/Grid";
import { Container } from "./AppStyle";

function App() {
  const [dados, setDados] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState([]);
  const [player, setPlayer] = useState("X");

  function switchPlayer() {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }

  function checkSpot(key) {
    return dados[key] !== "" ? false : true;
  }

  const handleClick = key => {
    if (checkSpot(key)) {
      const newDados = [...dados];
      newDados[key] = player;
      switchPlayer();
      setDados(newDados);
      console.log("spot clicked: ", key);
    } else {
      console.log("spot filled", key);
    }
  };
  return (
    <Container>
      <Grid data={dados} hc={handleClick} wn={winner} />
    </Container>
  );
}

export default App;
