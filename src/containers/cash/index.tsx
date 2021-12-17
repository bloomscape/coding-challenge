import React from 'react';
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
    return <Wrapper>
        <img src="/assets/images/cash/five.jpg" alt="5" className="rotated"/>
        <img src="/assets/images/cash/two.jpg" alt="2" className="rotated"/>
        <br></br>
        <img src="/assets/images/cash/one.jpg" alt="1" className="rotated"/>
        <img src="/assets/images/cash/half.png" alt=".5"/>
        <br></br>
        <img src="/assets/images/cash/quarter.jpg" alt=".25" />
    </Wrapper>;
}
export default Cash;