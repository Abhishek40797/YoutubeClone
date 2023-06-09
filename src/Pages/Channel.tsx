
import { NavLink, Outlet, useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import { useCallback, useEffect, useState } from 'react';
import { IVideosProps } from '../Interfaces';
import { fetchVideo } from '../APIs/fetchFromAPI';
import ChannelProfile from '../Components/ChannelComponent';
import styled from 'styled-components';

const ChannelDetails = () => {
    const {channelId} = useParams()

    const [channelData,setChannelData] = useState<IVideosProps[]>([])

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo("","",1,channelId as string,"")
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
                <SubContainer>
                    <ChannelTabs>
                        <NavLink to="featured" className="channel-tabs" >HOME</NavLink>
                        <NavLink to="video" className="channel-tabs" >VIDEOS</NavLink>
                        <NavLink to="live" className="channel-tabs" >LIVE</NavLink>
                        <NavLink to="playlists" className="channel-tabs" >PLAYLISTS</NavLink>
                        <NavLink to="community" className="channel-tabs" >COMMUNITY</NavLink>
                        <NavLink to="channels" className="channel-tabs" >CHANNELS</NavLink>
                        <NavLink to="about" className="channel-tabs" >ABOUT</NavLink>
                    </ChannelTabs>  
                </SubContainer>                   

                <Outlet />   
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

const SubContainer = styled.div`
    width : 90%;
    margin : auto;
    border-bottom : 1px solid gray; 
`

const ChannelTabs = styled.div`
    width : 60%;
    margin : auto;
    display : inline-block;
    padding-block : 10px;
    .channel-tabs {
        text-decoration : none;
        color : #000;
        font-weight : 700;
        font-size : 17px;
        padding-inline : 30px;
    }
`