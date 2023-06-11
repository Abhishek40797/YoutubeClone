import React from 'react';
import styled from 'styled-components';

interface IProps {
    categoryName : string,
    getCategory : (category:string)=>void,
    active : string
}

const CategoryBy = ({categoryName,getCategory,active}:IProps) => {
    
    return (
        <>
            <H3 className={ active === categoryName ? "btn-active" : "" } onClick={()=>getCategory(categoryName)}>{categoryName}</H3>
        </>
    );
}

export default CategoryBy;

const H3 = styled.h3`
    padding : 5px 15px;
    font-size : 15px;
    border-radius : 5px;
    background-color : ${({theme})=> theme.colors.bg };
    cursor : pointer;
`