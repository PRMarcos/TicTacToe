import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle` 
* { 
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
     
}  
body, html, #root { 
    height: 100%;

} 

body {
  background-color: rgb(150, 250, 200);
 
}

body,
input,
button {
  font-family: Arial, Helvetica, sans-serif;
}
`;
