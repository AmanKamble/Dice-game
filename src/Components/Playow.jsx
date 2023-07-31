import React, { useState } from 'react';
import TotleScore from './TotleScore';
import NumberSelecter from './NumberSelecter';
import styled from "styled-components";
import RoleDice from './RoleDice';
import { Button, OutlineButton } from './Styled/Button';
import Rules from './Rules';


const Playow = () => {
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, SetShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const roleDice = () => {
        if (!selectedNum) {
            setError("You have not selected any number")
            return
        };

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);

        if (selectedNum === randomNumber) {
            setScore(score + randomNumber);
        } else {
            setScore(score - 2);
        }

        setSelectedNum(undefined);
    };

    return (
        <MainContainer>
            <div className="topSection">
                <TotleScore score={score} />
                <NumberSelecter
                    selectedNum={selectedNum}
                    setSelectedNum={setSelectedNum}
                    error={error}
                    setError={setError}
                />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className="btns">
                <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
                <Button
                    onClick={() => SetShowRules(!showRules)}
                >
                    {showRules ? "Hide" : "Show"}
                    Rules
                </Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    )
}

export default Playow;

const MainContainer = styled.main`
    max-width: 90%;
    padding-top: 2.37rem;
    margin: 0 auto;
    .topSection{
        display: flex;
        justify-content: space-between;
        align-items: end;

        /* Media Query */
        @media (max-width: 600px) {
            flex-direction: column;
        }
    }
    .btns{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 2.5rem;
            gap: 0.625rem;
        }
`
