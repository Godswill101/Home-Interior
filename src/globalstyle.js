import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body{
        overflow-x: hidden; 
    }

    section{
        max-width: 1200px;
        padding: 1rem 30px;
        margin: auto;
        overflow: hidden;
    }

    .btn{
        display: inline-block;
        background: #041e42;
        color: #eee;
        padding: 1rem 30px;
        margin: 1rem auto;
        font-size: 20px;
        border: none;
        border-radius: 3px;
        text-transform: capitalize;
        cursor: pointer;
        letter-spacing: 3px;
        -webkit-transition: 0.9s ease;
                transition: 0.9s ease;
    }

    .hidden {
        visibility: hidden;
        height: 0;
    }

    .card {
        background-color: #fff;
        color: #333;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        padding: 40px;
        margin: 10px;
    }

    .icons{
        padding-top: 25px;
        text-align: center;
        z-index: 100;
    }
`
export default GlobalStyle;