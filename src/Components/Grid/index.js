import React from "react";
import { StyledGrid } from "./style";

function Grid(props){
    let _grid;
    const indexes = [0,1,2,3,4,5,6,7,8]
    const {data, hc} = props;
    
    if(data){
        _grid= data
    }else{
        _grid = ["","","","","","","","",""];
    }
    return(
    <StyledGrid>
      
        {indexes.map((i)=> <div key={i} onClick={()=>{hc(i)}}>{_grid[i]}</div>)}  
    </StyledGrid>)
}

export {Grid}