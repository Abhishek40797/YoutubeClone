import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBar from '../Components/SideBar';
import { useParams } from 'react-router-dom';
import { fetchPlaylist } from '../APIs/fetchFromAPI';
import PlaylistVideoCard from '../Components/PlaylistVideoCard';

const Playlists = () => {
    const {list} = useParams()
    const [videos,setVideos] = useState<any[]>([])


    const getPlaylistVideo = useCallback( async ()=>{
        try {
            const res = await fetchPlaylist(list as string)
            setVideos(res)
        }
        catch(err) {
            console.log(err)
        }
    },[list])

    useEffect(()=>{
        getPlaylistVideo()
    },[getPlaylistVideo])

    return (
        <>
            <SideBar />
            <Container>
                {
                    videos.map((video)=>{
                        const {snippet} = video
                        return (
                            <PlaylistVideoCard
                                key={video.id}
                                url = {snippet.thumbnails.medium.url}
                                title = {snippet.title}
                                channalTitle={snippet.channelTitle}
                                publishedAt = {snippet.publishedAt}
                                videoId = {snippet.resourceId.videoId}
                                channelId = {snippet.channelId}
                            />
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Playlists;

const Container = styled.div`
    width : 75%;
    margin-top : 1%;
    margin-left : 25%;
`