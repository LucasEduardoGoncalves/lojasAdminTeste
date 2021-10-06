import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #654FAC;
        -webkit-font-smoothing: antialiased;  
    }

    body, input, button {
        font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
        font: 16px;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

    .Global {
        display: flex;
    }
`;