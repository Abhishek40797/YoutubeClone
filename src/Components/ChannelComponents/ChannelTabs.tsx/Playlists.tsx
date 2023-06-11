import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useCallback, useEffect, useState } from 'react';
import { fetchVideo } from "../../../APIs/fetchFromAPI";
import { IVideosProps } from "../../../Interfaces";
import Playlists from "../../Playlists";

export const ChannelPlaylist = ()=>{
    const {channelId} = useParams()
    const [playlists,setPlaylists] = useState<IVideosProps[]>([])
    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo("","playlist",channelId)
            setPlaylists(res)
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
                {
                    playlists.length ? 
                        playlists.map((playlist)=>{
                            const {id,snippet} = playlist
                            return (
                                <Playlists 
                                    key={id.playlistId}
                                    playlistId ={id.playlistId}
                                    url ={snippet.thumbnails.medium.url}
                                    title={snippet.title}
                                    channaltitle = {snippet.channelTitle}
                                    channelId = {snippet.channelId}
                                    description = {snippet.description}
                                /> 
                            )
                        })
                    :   <P>This channel has no playlists.</P>
                }
            </Container>
        </>
    )
}

const Container = styled.div`
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