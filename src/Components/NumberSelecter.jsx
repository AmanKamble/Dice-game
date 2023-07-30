import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelecter = ({selectedNum, setSelectedNum, error, setError}) => {
    const arrNum = [1, 2, 3, 4, 5, 6];

    const numberSelecterHandler =(item)=>{
        setSelectedNum(item);
        setError("");
    }
    return (
        <NumberSelector>
            <p className='error'>{error}</p>
            <div className="flex">
                {arrNum.map((item, index) => (
                    <Box
                        key={index}
                        onClick={()=>numberSelecterHandler(item)}
                        isSelected={item === selectedNum} // Pass isSelected as a prop to Box
                    >
                        {item}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelector>
    );
};

export default NumberSelecter;

const NumberSelector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .error{
        color :red
    }
    .flex{
        display: flex;
        gap: 1.5rem;
    }
    p{
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`

const Box = styled.div`
    height: 4.5rem;
    width: 4.5rem;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => (props.isSelected ? 'white' : 'black')};
    background: ${(props) => (props.isSelected ? 'black' : 'white')};

    /* Media Query for Screens less than 600px */
    @media (max-width: 400px) {
        height: 1.5rem;
        width:  1.5rem;
        padding-top: 10px;
    }
    @media (max-width: 600px) {
        height: 2.5rem;
        width:  2.5rem;
        padding-top: 10px;
    }
`