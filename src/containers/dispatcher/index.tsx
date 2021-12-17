import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const bling = keyframes`
    from{ 
        background-color: #fadfa9;    
    }
    to{ 
        background-color: red;
    }
`;
const StyledDispatcher = styled.div`
    width: 500px;
    height: 80px;
    border-radius: 5px;
    border-bottom: solid 5px #a54028;
    background-color: #fadfa9;
    margin-top: 30px;
`;
const StyledDispatcherActive = styled(StyledDispatcher)`
    animation: ${bling} 2s alternate infinite;
`;
const Dispatcher = () => {
    const currentState = useSelector((state:any) => state.vending.currentState)
    return <>{ currentState === 'DISPATCH' ? <StyledDispatcherActive/> : <StyledDispatcher/>}</>
}

export default Dispatcher;