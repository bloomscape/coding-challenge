import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../module/vendingSlice';

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
    p{
        margin: 0;
        text-align: right;
    }
`;

const Display = () => {
    const {cash, currentState, change, code} = useSelector((state: any) => state.vending);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    useEffect(() => {
        switch(currentState){
            case 'START': setText('INSERT CASH...'); break;
            case 'CASH_ADDED': setText(`$ ${cash.toFixed(2)}`); break;
            case 'NOT_ENOUGHT': setText('NOT ENOUGH, INSERT MORE...'); break;
            case 'DISPATCH': setText(`DISPATCHING...`); setTimeout(()=>{
                setText(`YOUR CHANGE IS $ ${change.toFixed(2)}`);
                setTimeout(() => {
                    dispatch(clear())
                }, 2000)
            }, 2000); break;
        }
    }, [currentState])
    const renderingText = () => {
        
    }
    
    return <StyledDisplay>
        { text }
        {currentState != 'NOT_ENOUGHT' ? <p>{code}</p> : ''}
    </StyledDisplay>
}

export default Display;