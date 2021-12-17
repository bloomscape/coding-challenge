import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const bounce = keyframes`
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.1);
    }
`;

const StyledCan = styled.div`
    width: 100px;
    height: 170px;
    border-radius: 20px 15px;
    background-size: cover;
    background-position: center center;
    border-bottom: solid 7px #999;
    border-top: solid 4px #555;
`;

const StyledCanSelected = styled(StyledCan)`
    animation: ${bounce} 1s alternate infinite;
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
    const code = useSelector((state: any) => state.vending.code)
    return <Wrapped>
        {code === soda.code ? 
            <StyledCanSelected style={{
                backgroundImage: `url('/assets/images/sodas/${soda.type}.png')`
            }}/> :
            <StyledCan style={{
                backgroundImage: `url('/assets/images/sodas/${soda.type}.png')`
            }}/> 
        }
        <StyledPrice>
           $ {soda.cost.toFixed(2)}
        </StyledPrice>
        <div className="code">
            # {soda.code}
        </div>
    </Wrapped>
};

export default Can;