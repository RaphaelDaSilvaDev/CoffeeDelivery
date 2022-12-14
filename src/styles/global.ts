import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
    //box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-900"]};
  }

  :bl{
    outline: 0;
    box-shadow: 0 0 0 0;
  }
  
  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["gray-700"]};
  }

  body, input-security, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5,h6{
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme["gray-900"]};
  }
`;
