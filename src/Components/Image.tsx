import React from 'react';
import styled from 'styled-components';

interface IProps {
    width : string,
    height : string
}

const Image = ({width,height}:IProps) => {
    return (
        <>
            <Img 
                src='https://i.ytimg.com/vi/IR-yX-DY4L8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcHUkdBJHn_BglFHR20e1DU3nrsg' 
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