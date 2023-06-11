import React from 'react';
import styled from 'styled-components';

interface IProps {
    channalName : string
}

const ChannalName = ({channalName}:IProps) => {
    return (
        <>
            <P>{channalName}</P>
        </>
    )
}

export default ChannalName;

const P = styled.p`
    font-size : 14px;
    color : ${({theme})=>theme.colors.textColor};
`