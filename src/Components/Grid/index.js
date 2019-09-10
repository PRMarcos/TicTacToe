import React from "react";
import { StyledGrid, StyledGridSpot } from "./style";

function Grid(props) {
  const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const { data, hc } = props;

  return (
    <StyledGrid>
      {indexes.map(i => (
        <StyledGridSpot
          winner={data.winner.find(element => {
            return element === i;
          })}
          key={i}
          onClick={() => {
            hc(i);
          }}
        >
          {data.grid[i]}
        </StyledGridSpot>
      ))}
    </StyledGrid>
  );
}

export { Grid };
