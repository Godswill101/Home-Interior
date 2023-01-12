import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    display: inline-block;
    background: ${({ primary }) => (primary ? '#000d1a' : '#cd853f')};
    color: ${({color }) => (color ? '#000' : '#eee')};
    text-decoration: none;
    padding: 0.7rem 30px;
    border: none;
    border-radius: 3px;
    font-family: cursive;
    font-size: ${({ big }) => (big ? '0px' : '20px')};
    letter-spacing: 3px;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover{
        color: #93cb52;
        transform: translateY(-3px);
        transition: 0.5s ease-in-out;
    }

    a{
        text-decoration: none;
        color: #ccc;
    }
`;