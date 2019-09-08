import styled from "styled-components";


export const StyledGrid = styled.div`
    background-color:rgb(50, 255, 150);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    height: 300px;
    width:  300px;
    display: grid;
   grid-gap: 10px;
    grid-template-columns: auto auto auto;
    justify-content:center;
    align-content: center;
    border-radius: 7px;

    div{

        background-color:white;
        
        font-weight:bold;
        font-size:30px;
        
        display:flex;
        align-items:center;
        justify-content:center;
        height:85px;
        width: 85px;
        border-radius: 7px;

        :hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        }
        
       
    
    }
`;