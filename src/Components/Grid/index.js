import React from "react";
import { StyledGrid, StyledGridSpot } from "./style";

function Grid(props) {
  const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const { data, hc, wn } = props;

  return (
    <StyledGrid>
      {indexes.map(i => (
        <StyledGridSpot
          winner={wn.find(element => {
            return element === i;
          })}
          key={i}
          onClick={() => {
            hc(i);
          }}
        >
          {data[i]}
        </StyledGridSpot>
      ))}
    </StyledGrid>
  );
}

export { Grid };
