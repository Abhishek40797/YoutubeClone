import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

interface IProps {
    url : string,
    title : string,
    channalTitle : string,
    publishedAt : string,
    videoId : string,
    channelId : string
}

const PlaylistVideoCard = (props:IProps) => {
    const {url,title,channalTitle,publishedAt,videoId,channelId} = props
    const navigate = useNavigate()
    return (
        <>
            <VideoCard>
                <Image width="20%" height="150px" src={url} />
                <VideoContent>
                    <H3 onClick={()=>navigate(`/watch/${videoId}`)}>{title}</H3>
                    <H5 onClick={()=>navigate(`/channel/${channelId}`)}>{channalTitle}</H5>
                    <P>{Math.floor(Math.random()*100)}M views <I className='fa-solid fa-circle'></I> <span>{moment(publishedAt).fromNow()}</span> </P>
                </VideoContent>
            </VideoCard>
        </>
    )
}
export default PlaylistVideoCard;

const VideoContent = styled.div`
    padding-inline : 18px;
    display : flex;
    flex-direction : column;
    gap : 5px;
`

const VideoCard = styled.div`
    display : flex;
    margin-top :20px;
`

const H3 = styled.h3`
    font-size : 13px;
    font-weight : 600;
    cursor : pointer;
`

const P = styled.p`
    font-size : 12px;
    color : ${({theme})=>theme.colors.textColor};
`

const H5  = styled.h5`
    font-size : 13px;
    cursor : pointer;
    color : ${({theme})=>theme.colors.textColor};
`

const I = styled.i`
    font-size : 6px;
    color : ${({theme})=>theme.colors.textColor};
    padding-inline : 5px;
`