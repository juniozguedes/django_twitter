import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    font-family: 'Segoe UI',-apple-system, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    height: 100%;
    background-color: rgb(21, 32, 43);
  }
  html, body, #root{
    height:100%
  }
  button{
    cursor: pointer;
  }
  a{
        text-decoration:none;
        color:rgba(29, 161, 242)
      }
`;
