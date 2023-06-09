import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchVideo } from "../../APIs/fetchFromAPI"
import { IVideosProps } from "../../Interfaces"
import SmallCardSkeletonComponent from "../SkeltonComponents/SmallCardSkeltonComponent"
import styled from "styled-components"

export const ChannelVideos = ()=>{

    const {channelId} = useParams()
    const [videos,setVideos] = useState<IVideosProps[]>([]);
    const [isloading,setLoading] = useState(true)
    const [order,setOrder] = useState<string>("date")

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo("","video",channelId as string,order)
            setVideos(res)
        }
        catch(error) {
            console.log(error)
        }
    },[channelId,order])

    useEffect(()=>{
        setTimeout(()=>{
            getVideos()
            setLoading(false)
        },1000)
    },[getVideos])

    const handleOrder = (orderType:any)=>{
        setOrder(orderType)
        // setLoading(true)
    }

    return (
        <>
            <SortVideoContainer>
                <Button onClick={()=>handleOrder("date")}>Latest</Button>
                <Button onClick={()=>handleOrder("viewCount")}>Popular</Button>
            </SortVideoContainer>
            
            <VideoContainer>
                <SmallCardSkeletonComponent
                    isLoading = {isloading}
                    videos={videos}
                />
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

const SortVideoContainer = styled.div`
    display : flex;
    gap : 20px;
    margin : 20px 80px;
`

const Button = styled.button`
    border : none;
    outline : none;
    padding : 10px 20px;
    border-radius : 10px;
    font-weight : bold;
    cursor : pointer;
`