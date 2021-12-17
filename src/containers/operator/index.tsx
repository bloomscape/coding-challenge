import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
    align-items: center;
    background-color: #f9dfac;
`;

const StyledCoinCollector = styled.div`
    margin-top: 20px;
    width: 70px;
    height: 70px;
    background-color: #342925;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle{
        width: 55px;
        height 55px;
        border-radius: 50%;
        background-color: #bbb6b2;
        display: flex;
        justify-content: center;
        align-items: center;
        .bar{
            height: 40px;
            width: 5px;
            background-color: #5b5857;
        }
    }
`;

const StyledTicketCollector = styled.div`
    width: 200px;
    height: 30px;
    border: solid;
    border-width: 1px 3px 7px 3px;
    border-color: #3f3215;
    background-color: #8cbb67;
`;

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

const StyledDisplay = styled.div`
    width: 190px;
    height: 60px;
    border: solid 2px #000;
    margin-bottom: 20px;
    background-color: #92afb3;
    font-family: 'Codystar', cursive;
    color: #000;
    font-weight: bold;
    padding: 5px;
`;

const StyledBox = styled.div`
    width: 200px;
    height: 80px;
    background-color: #e6ecea;
    border-radius: 10px;
    margin-top: 30px;
    border: solid 3px #c2bbab;
`;

const Operator = () => {
    return <StyledWrapper>
        <StyledDisplay>
            Insert cash...
        </StyledDisplay>
        <StyledKeyboard>
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
        <StyledTicketCollector></StyledTicketCollector>
        <StyledCoinCollector>
            <div className="circle">
                <div className="bar"></div>
            </div>
        </StyledCoinCollector>
        <StyledBox></StyledBox>
    </StyledWrapper>
}

export default Operator;