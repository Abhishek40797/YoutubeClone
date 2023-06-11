import styled from "styled-components";
import ChannelImage from "./ChannelComponents/ChannelImage";
import ChannalName from "./ChannelComponents/ChannalName";
import moment from "moment";
import { useCallback, useEffect, useState } from 'react';
import { fetchChannel } from "../APIs/fetchFromAPI";
import { useNavigate } from "react-router-dom";

interface IProps {
    videoId? : string,
    channelId : string,
    channelTitle : string,
    title : string,
    publishedAt : string
}

const VideoCardDetails = (props:IProps)=>{
    const {channelId,channelTitle,title,publishedAt,videoId} = props
    const navigate  = useNavigate()

    const [imageUrl,setImageUrl] = useState("")
    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchChannel(channelId)
            setImageUrl(res.snippet.thumbnails.high.url)
        }
        catch(error) {
            console.log(error)
        }
    },[channelId])

    useEffect(()=>{
        getVideos()
    },[getVideos])

    return (
        <>
            <Container>
                <ChannelImage url={imageUrl} channelId={channelId} />
                <Content>
                    <H3 onClick={()=>navigate(`/watch/${videoId}`)}>{title.slice(0,50)}...</H3>
                    <ChannalName channalName={channelTitle} />
                    <ViewCount>
                        <P>{Math.floor(Math.random()*1000)}M views</P>
                        <I className="fa-solid fa-circle"></I>
                        <P>{moment(publishedAt).fromNow()}</P>
                    </ViewCount>
                </Content>
            </Container>
        </>
    )
}

export default VideoCardDetails;

const Container = styled.div`
    display : flex;
    gap : 10px;
`

const Content  = styled.div`

`

const H3 = styled.h3`
    font-size : 13px;
`
const P = styled.p`
    font-size : 13px;
    color : ${({theme})=>theme.colors.textColor};;
`
const ViewCount = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
`

const I = styled.i`
    font-size : 5px;
    color : gray;
`