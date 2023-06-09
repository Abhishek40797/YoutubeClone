import { useParams } from "react-router-dom";
import styled from "styled-components"
import { IVideosProps } from "../../Interfaces";
import { useCallback, useEffect, useState } from "react";
import { fetchVideo } from "../../APIs/fetchFromAPI";
import SmallCardSkeletonComponent from "../SkeltonComponents/SmallCardSkeltonComponent";

export const ChannelLive = ()=>{

    const {channelId} = useParams()
    const [videos,setVideos] = useState<IVideosProps[]>([]);
    const [isloading,setLoading] = useState(true)

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo("","video",channelId as string,"")
            setVideos(res)
        }
        catch(error) {
            console.log(error)
        }
    },[channelId])

    useEffect(()=>{
        setTimeout(()=>{
            getVideos()
            setLoading(false)
        },2000)
    },[getVideos])

    return (
        <>
            <VideoContainer>
                {
                    !videos.length ? <P>This channel has no videos.</P> : 
                        <SmallCardSkeletonComponent
                            isLoading = {isloading}
                            videos={videos}
                        />
                }
            </VideoContainer>
        </>
    )
}


const VideoContainer = styled.div`
    margin : 20px 80px;
    display : flex;
    flex-wrap : wrap;
    gap : 20px;
`

const P = styled.p`
    width : 100%;
    text-align : center;
    font-size : 15px;
`