import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchVideo } from "../../../APIs/fetchFromAPI"
import { IVideosProps } from "../../../Interfaces"
import SmallCardSkeletonComponent from "../../SkeltonComponents/SmallCardSkeltonComponent"
import styled from "styled-components"
import { VideoByOrder } from "../VideoByOrder"

export const ChannelVideos = ()=>{

    const {channelId} = useParams()
    const [videos,setVideos] = useState<IVideosProps[]>([]);
    const [isloading,setLoading] = useState(true)
    const [order,setOrder] = useState<string>("date")
    const [active,setActive] = useState<string>("relevance")

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo("","video",channelId as string,order,12)
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
        setActive(orderType)
        setLoading(true)
    }

    return (
        <>
            <SortButtons>
                {
                    VideoByOrder.map((order)=>{
                        return (
                            <Button 
                                key={order.id} 
                                onClick={()=>handleOrder(order.orderby)} 
                                className={active === order.orderby?"btn-active":""}>{order.heading}</Button>
                        )
                    })
                }
            </SortButtons>
            
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

const SortButtons = styled.div`
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