import React from 'react';
import styled from 'styled-components';

const ChannelSubscibe = () => {
    return (
        <>
            <Subscribe>Subscribe</Subscribe>
        </>
    )
}

export default ChannelSubscibe;

const Subscribe = styled.button`
    border : none;
    outline : none;
    color : #FFF;
    background-color : #000;
    padding : 10px 20px;
    font-weight : 700;
    border-radius : 20px;
    cursor : pointer;
`