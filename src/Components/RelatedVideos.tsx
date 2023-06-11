import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IVideosProps } from '../Interfaces';
import { fetchWatchContainerData } from '../APIs/fetchFromAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from '../utilis/components'
import moment from 'moment';

interface IProps {
    resultShow : number
}

const RelatedVideos = ({resultShow}:IProps) => {

    const {videoId} = useParams()
    const navigate = useNavigate()
    const [videos,setVideos] = useState<IVideosProps[]>([])

    const getVideoDetails = useCallback( async ()=>{
        try {
            const res = await fetchWatchContainerData(`search`,videoId as string,resultShow)
            setVideos(res)
        }
        catch(err) {
            console.log(err)
        }
    },[videoId,resultShow])

    useEffect(()=>{
        getVideoDetails()
    },[getVideoDetails])

    const handlePlayVideo = (id:any)=>{
        navigate(`/watch/${id.videoId}`)
        window.scrollTo(0,0)
    }

    return (
        <>
            <Container>
                {
                    videos.map((video,i)=>{
                        const {id,snippet} = video
                        return (
                            <RelatedVideoCard key={i}>
                                <Image width="30%" height="110px" src={snippet.thumbnails.high.url} />
                                <VideoContent>
                                    <H3 onClick={()=>handlePlayVideo(id)}>{snippet.title}</H3>
                                    <H5 onClick={()=>navigate(`/channel/${snippet.channelId}`)}>{snippet.channelTitle}</H5>
                                    <P>76K views . <span>{moment(snippet.publishedAt).fromNow()}</span></P>
                                </VideoContent>
                            </RelatedVideoCard>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default RelatedVideos;

const Container = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 20px;
`

const RelatedVideoCard = styled.div`
    display : flex;
`

const VideoContent = styled.div`
    padding-inline : 18px;
    display : flex;
    flex-direction : column;
    gap : 5px;
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