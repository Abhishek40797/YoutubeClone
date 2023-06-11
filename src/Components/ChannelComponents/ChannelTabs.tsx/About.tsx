import styled from "styled-components"

import { useCallback, useEffect, useState } from 'react';
import { HeaderIcon } from "../../HeaderButton"
import { useParams } from "react-router-dom"
import { fetchChannel } from "../../../APIs/fetchFromAPI"

export const ChannelAbout = ()=>{
    const {channelId} = useParams()
    const [about,setAbout] = useState({
        description : "",
        date : "",
    })

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchChannel(channelId as string)
            setAbout({
                description : res.snippet.description,
                date : res.snippet.publishedAt
            })
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
                <Description>
                    <H4>Description</H4>
                    <P>{about.description}</P>
                </Description>
                <Stats>
                    <H4>Stats</H4>
                    <P>Joined: {new Date(about.date).toDateString()}</P>
                    <P>{Math.floor(Math.random()*1000)} views</P>
                    <Icons>
                        <HeaderIcon icon="fa-regular fa-flag" />
                        <HeaderIcon icon="fa-solid fa-share" />
                    </Icons>
                </Stats>
            </Container>
        </>
    )
}

const Container = styled.div`
    width : 90%;
    margin : 50px auto;
    display : flex;
    justify-content : space-between;
`

const Description = styled.div`
    width : 50%;
`

const P = styled.p`
    font-size : 15px;
    padding-block : 10px;
`

const Stats = styled.div`
    width : 30%;
`

const Icons = styled.div`
    display  : flex;
    padding-top : 20px;
    gap : 10px;
`

const H4 = styled.div`
    font-size : 20px;
    border-bottom : 1px solid gray;
    padding-block : 13px;
`