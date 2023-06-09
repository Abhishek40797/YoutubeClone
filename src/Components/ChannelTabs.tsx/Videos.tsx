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
    const [order,setOrder] = useState<string>("")

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo("","video",1,channelId as string,"viewCount")
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

    // const handleOrder = (orderType:string)=>{
    //     setOrder(orderType)
    // }

    return (
        <>
            <SortVideoContainer>
                <Button onClick={()=>setOrder("date")}>Latest</Button>
                <Button onClick={()=>setOrder("viewCount")}>Popular</Button>
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