import React from 'react';
import { Link } from 'react-router-dom';
import Styled, { styled } from 'styled-components';
import { Button } from './Styled/Button';

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

