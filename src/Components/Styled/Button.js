import styled from "styled-components";

export const Button = styled.button`
    color: white;
    font-size: 1rem;
    padding: 0.62rem 1.12rem;
    background: #000;
    border-radius: 0.31rem;
    min-width: 13.75rem;
    border: none;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.4s ease-in;
    &:hover{
        background: white;
        color: black;
        border: 1px solid black;
        transition: all 0.3s ease-in;
    }

`
export const OutlineButton = styled(Button)`
    color: black;
    background: white;
    border: 1px solid black;
    &:hover{
        background: black;
        color: white;
        border: 2px solid transparent;
    }
`