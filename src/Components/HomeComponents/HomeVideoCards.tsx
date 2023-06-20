import React from 'react';
import styled from 'styled-components';
import VideoCardDetails from '../VideoCardDetails';
import { useNavigate } from 'react-router-dom';
import { IVideosProps } from '../../Interfaces';

interface IProps {
    videoData : IVideosProps
}

const HomeVideoCards = ({videoData}:IProps) => {
    const {id,snippet} = videoData
    const navigate = useNavigate();
    return (
        <>
            <VideoCard>
                <Img src={snippet.thumbnails.medium.url} alt=''  onClick={()=>navigate(`/watch/${id.videoId}`)} />
                {/* <VideoCardDetails
                    videoId={id.videoId}
                    channelId={snippet.channelId}
                    channelTitle={snippet.channelTitle}
                    title={snippet.title}
                    publishedAt={snippet.publishedAt}
                /> */}
            </VideoCard>
        </>
    )
}

export default HomeVideoCards;

const VideoCard = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 5px;
    cursor : pointer;
`

const Img = styled.img`
    width : 100%;
    object-fit : cover;
    height : 200px;
    border-radius : 10px;
    transition : .5s;
    &:hover {
        border-radius : 0;
    }
`