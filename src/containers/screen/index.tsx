import React from 'react';
import styled from 'styled-components';
import Can from '../../components/can';

const Wrapper = styled.div`
    background-color: #eee;
    width: 600px;
    padding: 30px 10px;
    border: solid #333 20px;
    border-radius: 4px;
`;

const data = [{
    type: 'coca',
    total: 7,
    cost: 3.5,
    code: '001'
}, {
    type: 'burn',
    total: 10,
    cost: 3.5,
    code: '002'
}, {
    type: 'cocaLight',
    total: 11,
    cost: 3.5,
    code: '003'
}, {
    type: 'ciel',
    total: 5,
    cost: 2,
    code: '004'
}, {
    type: 'cielM',
    total: 2,
    cost: 2.5,
    code: '005'
}, {
    type: 'delaware',
    total: 1,
    cost: 4,
    code: '011'
}, {
    type: 'fanta',
    total: 11,
    cost: 3,
    code: '012'
}, {
    type: 'fresca',
    total: 7,
    cost: 3,
    code: '013'
}, {
    type: 'monster',
    total: 10,
    cost: 5,
    code: '014'
}, {
    type: 'mundet',
    total: 12,
    cost: 3.5,
    code: '015'
}, {
    type: 'sprite',
    total: 6,
    cost: 3,
    code: '021'
}];

const Screen = () => {
    return <Wrapper>
        {data.map(soda => <Can soda={soda}></Can>)}
        
    </Wrapper>
}

export default Screen;