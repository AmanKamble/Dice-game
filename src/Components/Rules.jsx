import React from 'react';
import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>If you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
    background: #FBF1F1;
    padding: 1.25rem;
    max-width: 50rem;
    margin: 0 auto;
    margin-top: 2.5rem;

    h2{
        font-size: 1.5rem;
    }
    .text{
        margin-top: 1.5rem;
    }
`