import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyle = createGlobalStyle`
    ${reset};
   
   
    body{
       
        font-size: 1rem;
		color:#fff;
        width:100%;
        height:100%;
        background: black;
        background-size:cover;
    }
`;


export { GlobalStyle }