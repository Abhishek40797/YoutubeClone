import React from 'react';
import styled from 'styled-components';

interface IProps {
    width : string,
    height : string,
    src : string
}

const Image = ({width,height,src}:IProps) => {
    return (
        <>
            <Img 
                src={src}
                width={width} 
                height={height}
                alt=''
             />
        </>
    );
}


export default Image;


const Img = styled.img<{width:string,height:string}>`
    width : 45%;
    height : 110px;
    object-fit : cover;
    border-radius : 10px;
    cursor : pointer;
`