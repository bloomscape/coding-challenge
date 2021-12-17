import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { typing } from '../module/vendingSlice';
const StyledKeyboard = styled.div`
    margin-bottom: 20px;
    background-color: #342925;
    padding: 20px;
    width: 166px;
    button{ 
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 7px;
        padding:0px;
        border: none;
        outline: none;
    }
`;

const values = [1,2,3,4,5,6,7,8,9,'#',0,'<-']

const Keyboard = () => {
    const dispatch = useDispatch();
    return <StyledKeyboard>
        {values.map(v => <button onClick={()=> dispatch(typing(v))}>{v}</button>)}
    </StyledKeyboard>
}

export default Keyboard;