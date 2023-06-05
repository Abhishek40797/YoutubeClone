import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon : string
}

export const HeaderIcon = (props:IProps)=> {
    const {icon} = props
    return (
        <>
            <I className={`${icon}`}></I>
        </>
    )
}


const I = styled.i`
    width : 40px;
    height : 40px;
    font-size : 20px;
    display : grid;
    border-radius : 50%;
    place-items : center;
    &:hover {
        background-color : #eeeeee;
    }
`