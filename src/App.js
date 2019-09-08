import React,{useState} from 'react';
import {Grid} from "./Components/Grid";
import {Container} from "./AppStyle"


function App() {
  const [dados,setDados] = useState(["","","","","","","","","",]);
  const [player,setPlayer] = useState("X");
  
  function switchPlayer(){
    if(player === "X"){
      setPlayer("O");
    }else{
      setPlayer("X");
    }
  }

  const handleClick = (key) =>{
    
    const newDados = [...dados];
    newDados[key] = player;
    switchPlayer();
    setDados(newDados); 
    console.log("parent clicado: ", key)
}
  return (
  <Container>
    <Grid  data={dados} hc={handleClick}/>
  </Container>
  );
}

export default App;
