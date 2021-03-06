import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        padding: 0;
        margin: 0;
        &:focus {
        outline: none;
        }
        -webkit-tap-highlight-color: transparent;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #fcfbfd;
        width: 100%;
        margin: auto 0;
        height: 100vh;
        overflow-x: hidden;
        /*overflow-y: scroll;*/
    }
    body::-webkit-scrollbar { 
        display: none;
    }
`;

export default globalStyles;
