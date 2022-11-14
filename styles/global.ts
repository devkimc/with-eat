import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NotoSansKR-Regular';
        src: url('fonts/NotoSansKR-Regular.otf') format('opentype');
    }
    
    body {
        font-family: 'NotoSansCJKkr-Regular';
    }
`;

export default GlobalStyle;
