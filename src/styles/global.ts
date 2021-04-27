import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html {
        font-size: 93.75%;
        }   
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }   
    }

    body, input, button, textarea {
        font: 500 1rem Inter, sans-serif;
        color: var(--gray-500);
    }

    body {
        background: #121214;
        color: #e1e1e6;
    }

    button {
        cursor: pointer;
    }
`