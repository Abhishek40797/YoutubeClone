
import { useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import { useCallback, useEffect, useState } from 'react';
import { IVideosProps } from '../Interfaces';
import { fetchVideo } from '../APIs/fetchFromAPI';
import ChannelProfile from '../Components/ChannelComponent';
import styled from 'styled-components';

const ChannelDetails = () => {
    const {channelId} = useParams()

    const [channelData,setChannelData] = useState<any[]>([])

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo("","",1,channelId as string)
            setChannelData(res)
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
            <SideBar />
            <Container>
                {
                    channelData[0]!==undefined ?
                    <ChannelProfile 
                    width='150px' 
                    height="150px"
                    url = {channelData[0].snippet.thumbnails.default.url}
                    channeltitle={channelData[0].snippet.channelTitle}
                    channelId={channelData[0].snippet.channelId}
                />: ""
                }
            </Container>
        </>
    )
}

export default ChannelDetails;


const Container = styled.div`
    width : 75%;
    margin-top : 1%;
    margin-left : 20%;
`