import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCash } from '../../module/vendingSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
    img{
        width: 200px;
        height: 100px;
        object-fit: contain;
    }
    position: fixed;
    right: 0px;
    top: 0px;
    cursor: pointer;
`;
const Cash = () => {
    const cash = useSelector((state: any) => state.vending.cash)
    const dispatch = useDispatch();

    return <Wrapper>
        <img src="/assets/images/cash/five.jpg" alt="5" onClick={ () =>dispatch(addCash(5)) } />
        <img src="/assets/images/cash/two.jpg" alt="2" onClick={ () =>dispatch(addCash(2)) } />
        <br></br>
        <img src="/assets/images/cash/one.jpg" alt="1" onClick={ () =>dispatch(addCash(1)) } />
        <img src="/assets/images/cash/half.png" alt=".5" onClick={ () =>dispatch(addCash(.5)) } />
        <br></br>
        <img src="/assets/images/cash/quarter.jpg" alt=".25" onClick={ () =>dispatch(addCash(.25)) } />
    </Wrapper>;
}
export default Cash;