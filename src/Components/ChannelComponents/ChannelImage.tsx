import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    url : string,
    channelId?:string
}

const ChannelImage = ({url,channelId}:IProps) => {
    const navigate = useNavigate();
    const imageUrl = url.length ? url : "https://yt3.ggpht.com/ytc/AGIKgqMFlMCI8vjOK3n96Kqy0d-B48basVZkQ1Aus-DdOw=s88-c-k-c0x00ffffff-no-rj-mo"
    return (
        <>
            <Img src={imageUrl} alt="" onClick={()=>navigate(`/channel/${channelId}`)} />
        </>
    )
}

export default ChannelImage;

const Img = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
`