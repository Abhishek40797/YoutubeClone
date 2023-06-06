import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IVideos {
    videoId : string,
    thumbnail : any,
    title : string,
    channalName : string,
    published : string,
    channelid : string
}

const FeedVideos = (props:IVideos) => {
    const {videoId,thumbnail,title,channalName,published,channelid} = props
    const navigate  = useNavigate()

    return (
        <>
            <SearchView onClick={()=>navigate(`/watch/${videoId}`)}>
                <Img src={thumbnail} alt='' />
                <VideoContent>
                    <H3>{title}</H3>
                    <P>76K views . <span>{published}</span></P>
                    <H5>Channel Name : {channalName}</H5>
                </VideoContent>
            </SearchView>
        </>
    );
}

export default FeedVideos;



const SearchView = styled.div`
    width : 100%;
    margin-block : 20px;
    display : flex;
`

const Img = styled.img`
    width : 35%;
    height : 220px;
    object-fit : cover;
    border-radius : 10px;
    cursor : pointer;
`

const VideoContent = styled.div`
    padding-inline : 18px;
    display : flex;
    flex-direction : column;
    gap : 10px;
`

const H3 = styled.h3`
    font-size : 16px;
    font-weight : 600;
    cursor : pointer;
`

const P = styled.p`
    font-size : 12px;
    color : ${({theme})=>theme.colors.textColor}
`

const H5  = styled.h5`
    font-size : 13px;
    cursor : pointer;
`