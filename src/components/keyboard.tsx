import React from 'react';
import styled from 'styled-components';

const StyledKeyboard = styled.div`
    margin-bottom: 20px;
    background-color: #342925;
    padding: 20px;
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

const Keyboard = () => {
    return <StyledKeyboard>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <br></br>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <br></br>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <br></br>
        <button>#</button>
        <button>0</button>
        <button> {'<-'} </button>
    </StyledKeyboard>
}

export default Keyboard;