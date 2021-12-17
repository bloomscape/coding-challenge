import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledDisplay = styled.div`
    width: 190px;
    height: 60px;
    border: solid 2px #000;
    margin-bottom: 20px;
    background-color: #92afb3;
    font-family: 'Codystar', cursive;
    color: #000;
    font-weight: bold;
    font-size: 25px;
    padding: 5px;
`;

const Display = () => {
    const {cash, currentState, change} = useSelector((state: any) => state.vending)

    const renderingText = () => {
        switch(currentState){
            case 'START': return 'INSERT CASH...';
            case 'CASH_ADDED': return `$ ${cash.toFixed(2)}`;
        }
    }
    
    return <StyledDisplay>
        { renderingText() }
    </StyledDisplay>
}

export default Display;