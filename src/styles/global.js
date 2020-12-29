import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, input {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  :root {
    --font: #383F51;
    --background: #DDDBF1;
    --primary: #3C4F76;
    --secondary: #D1BEB0;
    --trinary: #AB9F9D;
  }
`;
