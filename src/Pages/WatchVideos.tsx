import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchWatchVideo } from "../APIs/fetchFromAPI";
import RelatedVideos from "../Components/RelatedVideos";
import { IWatchProps } from "../Interfaces";
import UserComments from "../Components/Comments";

const WatchVideos = ()=> {
    const {videoId} = useParams()
    const [video,setVideo] = useState<IWatchProps[]>([])
    const [videolink,setVideolink] = useState("")

    const getVideoDetails = useCallback(async()=>{
        try {
            const res = await fetchWatchVideo("videos",videoId)
            setVideo(res);
        }
        catch(err) {
            console.log(err)
        }
    },[videoId])

    useEffect(()=>{
        if(video.length) {
            setVideolink(`https://www.youtube.com/embed/${video[0].id}`)
        }   
    },[video])

    useEffect(()=>{
        getVideoDetails()
    },[getVideoDetails])

    return (
        <>
            <Container>
                <WatchSection>
                    <IFrame src={videolink} title="YouTube video player"></IFrame>
                    <Title>{video.length? video[0].snippet.title : ""}</Title>
                    <UserComments/>                    
                </WatchSection>
                
                <RelatedVideos />

            </Container>
        </>
    )
}
export default WatchVideos;

const Container = styled.div`
    width : 90%;
    margin : 20px auto;
    display : flex;
    gap : 20px;
`

const WatchSection = styled.div`
    width : 70%;
`

const IFrame = styled.iframe`
    width : 100%;
    height : 550px;
    object-fit : cover;
`

const Title = styled.h3`
    font-size : 18px;
`