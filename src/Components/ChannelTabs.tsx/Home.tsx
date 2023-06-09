import styled from "styled-components"
import { ChannelVideos } from "./Videos"

export const ChannelHome = ()=>{
    return (
        <>
            <H3>Videos</H3>
            <ChannelVideos />
        </>
    )
}

const H3 = styled.h3`
    width : 100%;
    font-size : 15px;
    margin-left : 60px;
    margin-top : 10px;
`