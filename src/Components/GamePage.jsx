import React from 'react';
import { Link } from 'react-router-dom';
import Styled, { styled } from 'styled-components';

const GamePage = () => {
    return (
        <Container>
            <div>
                <img src="/images/dices.png" alt="dices png" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Link to='/playnow'><Button>Play Now</Button></Link>
            </div>
        </Container>
    )
}

export default GamePage;

const Container = styled.div`
    max-width: 73.75rem;
    height: 100vh;
    display: flex;
    margin:  0 auto;
    align-items: center;
    justify-content: center;

    .content{
        h1{
            font-size: 6rem;
            font-weight: bold;
            white-space: nowrap;
        }
    }
`

const Button = styled.button`
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