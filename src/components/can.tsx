import React from 'react';
import styled from 'styled-components';

const StyledCan = styled.div`
    width: 100px;
    height: 170px;
    border-radius: 20px 15px;
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
    text-align: center;
`;

const Wrapped = styled.div`
    width: 100px;
    margin: 5px;
    position: relative;
    display: inline-block;
    .code{
        position: absolute;
        top: 10px;
        background: #fff;
        padding: 5px 10px;
        border-radius: 4px;
    }
`;

const Can = ({soda}: any) => {
    return <Wrapped>
        <StyledCan style={{
            backgroundImage: `url('/assets/images/sodas/${soda.type}.png')`
        }}></StyledCan>
        <StyledPrice>
           $ {soda.cost.toFixed(2)}
        </StyledPrice>
        <div className="code">
            # {soda.code}
        </div>
    </Wrapped>
};

export default Can;