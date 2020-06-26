import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    font-family: -apple-system, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    height: 100%;
    background-color: #141f27;
  }
  html, body, #root{
    height:100%
  }
  button{
    cursor: pointer;
  }
`;
