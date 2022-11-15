import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'AppleSDGothicNeoM';
        src: url('fonts/AppleSDGothicNeoM.ttf') format('truetype');
    }
    
    @font-face {
        font-family: 'AppleSDGothicNeoB';
        src: url('fonts/AppleSDGothicNeoB.ttf') format('truetype');
    }
    
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
        font-family: 'AppleSDGothicNeoM';
        background-color: #f9f9f9;
    }

    @media (prefers-color-scheme: dark) {
        html {
          color-scheme: dark;
        }
        body {
          color: white;
          background: black;
        }
    }

    @media screen and (max-width: 480px){
    *{
      font-size: 13px;
    }
  }

`;

export default GlobalStyle;
