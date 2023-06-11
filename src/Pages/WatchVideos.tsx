import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchWatchContainerData } from "../APIs/fetchFromAPI";
import RelatedVideos from "../Components/RelatedVideos";
import { IWatchProps } from "../Interfaces";
import UserComments from "../Components/Comments";
import ChannelImage from "../Components/ChannelComponents/ChannelImage";
import ChannalName from "../Components/ChannelComponents/ChannalName";
import ChannelSubscibe from "../Components/ChannelComponents/ChannelSubscibe";

const WatchVideos = ()=> {
    const {videoId} = useParams()
    const [video,setVideo] = useState<IWatchProps[]>([])
    const [videolink,setVideolink] = useState("")
    const [resultShow,setResultShow] = useState<number>(10)

    const getVideoDetails = useCallback(async()=>{
        try {
            const res = await fetchWatchContainerData("videos",videoId as string,resultShow)
            setVideo(res);
        }
        catch(err) {
            console.log(err)
        }
    },[videoId,resultShow])

    useEffect(()=>{
        if(video.length) {
            setVideolink(`https://www.youtube.com/embed/${video[0].id}?&autoplay=1`)
        }   
    },[video])

    useEffect(()=>{
        getVideoDetails()
    },[getVideoDetails])

    const handleScroll = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight) {
            setResultShow(prev=>prev+6)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return window.addEventListener("scroll",handleScroll)
    },[resultShow])


    return (
        <>
            <Container>
                <WatchSection>
                    <IFrame src={videolink} title="YouTube video player"></IFrame>
                    <Title>{video.length? video[0].snippet.title : ""}</Title>

                    <ChannelNameSection>
                        <ChannelNameSectionLeft>
                            <ChannelImage url="" channelId={video.length? video[0].snippet.channelId :""} />
                            <div>
                                <ChannalName channalName={video.length? video[0].snippet.channelTitle :""} />
                                <P>{Math.floor(Math.random()*1000)}M subscibers</P>
                            </div>
                            <ChannelSubscibe />
                        </ChannelNameSectionLeft>
                    </ChannelNameSection>

                    <UserComments resultShow={resultShow}/>                    
                </WatchSection>
                
                <RelatedVideos resultShow={resultShow} />

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

const ChannelNameSection = styled.div`
    display : flex;
    justify-content : space-between;
    margin-block : 10px;
`

const ChannelNameSectionLeft = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`

const P = styled.p`
    font-size : 12px;
`