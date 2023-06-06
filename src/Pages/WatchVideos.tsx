import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { fetchWatchVideo } from "../APIs/fetchFromAPI";
import { IWatchProps } from "../Interfaces";
import RelatedVideos from "./RelatedVideos";

const WatchVideos = ()=> {
    const {videoId} = useParams()
    const [video,setVideo] = useState<IWatchProps[]>([])
    const [details,setDetails] = useState({
        id : "",
        snippet : {
            title : "",
        }
    })
    const [videolink,setVideolink] = useState("")

    useEffect(()=>{
        const getVideoDetails = async ()=>{
            try {
                const res = await fetchWatchVideo("videos",videoId as string)
                setVideo(res)
                setDetails({
                    id : video[0].id,
                    snippet : {
                        title : video[0].snippet.title
                    }
                })
                setVideolink(`https://www.youtube.com/embed/${details.id}`)
            }
            catch(err) {
                console.log(err)
            }
        }
        getVideoDetails()
    })

    return (
        <>
            <Container>
                <WatchSection>
                    <IFrame src={videolink} title="YouTube video player"></IFrame>
                    <Title>{details.snippet.title}</Title>
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