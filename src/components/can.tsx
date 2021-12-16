import React from 'react';
import styled from 'styled-components';
import cocaCola from '../assets/images/coca-cola.webp';

const StyledCan = styled.div`
    width: 100px;
    height: 170px;
    border-radius: 20px 15px;
    background: url('${cocaCola}');
    background-size: cover;
    background-position: center center;
    border-bottom: solid 7px #999;
    border-top: solid 4px #555;
`;

const StyledPrice = styled.p`
    color: #fff;
    background-color: #444;
    width: 60px;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    margin: 10px auto;
`;

const Wrapped = styled.div`
    width: 100px;
    margin: 5px;
    display: inline-block;
`;

const Can = () => {
    return <Wrapped>
        <StyledCan></StyledCan>
        <StyledPrice>
            $7.00
        </StyledPrice>
    </Wrapped>
};

export default Can;