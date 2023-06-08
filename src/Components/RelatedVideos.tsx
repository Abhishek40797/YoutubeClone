import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IVideosProps } from '../Interfaces';
import { fetchWatchVideo } from '../APIs/fetchFromAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from '../utilis/components'

const RelatedVideos = () => {

    const {videoId} = useParams()
    const navigate = useNavigate()
    const [videos,setVideos] = useState<IVideosProps[]>([])

    const getVideoDetails = useCallback( async ()=>{
        try {
            const res = await fetchWatchVideo(`search`,videoId as string)
            setVideos(res)
        }
        catch(err) {
            console.log(err)
        }
    },[videoId])

    useEffect(()=>{
        getVideoDetails()
    },[getVideoDetails])

    return (
        <>
            <Container>
                {
                    videos.map((video,i)=>{
                        const {id,snippet} = video
                        return (
                            <SearchView key={i} onClick={()=>navigate(`/watch/${id.videoId}`)}>
                                <Image width="45%" height="110px" src={snippet.thumbnails.high.url} />
                                <VideoContent>
                                    <H3>{snippet.title}</H3>
                                    <H5>{snippet.channelTitle}</H5>
                                    <P>76K views . <span>{snippet.publishedAt}</span></P>
                                </VideoContent>
                            </SearchView>
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

const SearchView = styled.div`
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