import React from 'react';
import styled from 'styled-components';


const TotleScore = ({score}) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotleScore;

const ScoreContainer = styled.div`
max-width: 12.5rem;
text-align: center;
    h1{
        font-size: 6.24rem;
        line-height: 6.25rem;
    }
    p{
        font-size: 1.5rem;
        font-weight: 500;
        text-transform: uppercase;
    }
`