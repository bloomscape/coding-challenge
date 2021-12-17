import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Can from '../../components/can';

const Wrapper = styled.div`
    background-color: #eee;
    width: 600px;
    padding: 30px 10px;
    border: solid #333 20px;
    border-radius: 4px;
`;


const Screen = () => {
    const sodas = useSelector((state:any) => {
        return state.vending.sodas
    })
    return <Wrapper>
        {sodas.map((soda:any) => <Can soda={soda}></Can>)}
    </Wrapper>
}

export default Screen;