import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        
    }
    body{
       
        font-size: 1rem;
		color:#fff;
        width:100%;
        height:100%;
        background: black;
        background-size:cover;
    }
`;
const Wrapper = styled.section`

 
`;


export {GlobalStyle, Wrapper}