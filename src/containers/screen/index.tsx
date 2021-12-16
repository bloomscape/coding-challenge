import React from 'react';
import styled from 'styled-components';

import Can from '../../components/can';

const Wrapper = styled.div`
    background-color: #eee;
    width: 700px;
    padding: 30px 10px;
    border: solid #333 20px;
    border-radius: 4px;
`;

const Screen = () => {
    return <Wrapper>
        <div>
            <Can></Can>
            <Can></Can>
            <Can></Can>
            <Can></Can>
            <Can></Can>
        </div>
        <div>
            <Can></Can>
            <Can></Can>
            <Can></Can>
            <Can></Can>
            <Can></Can>
        </div>
        <div>
            <Can></Can>
            <Can></Can>
            <Can></Can>
            <Can></Can>
            <Can></Can>
        </div>
        
    </Wrapper>
}

export default Screen;