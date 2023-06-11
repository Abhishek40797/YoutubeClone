
import { NavLink, Outlet, useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import { useCallback, useEffect, useState } from 'react';
import { fetchChannel } from '../APIs/fetchFromAPI';
import ChannelProfile from '../Components/ChannelComponents/ChannelProfile';
import styled from 'styled-components';

const ChannelDetails = () => {
    const {channelId} = useParams()

    const [imageUrl,setImageUrl] = useState("")
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchChannel(channelId as string)
            setTitle(res.snippet.title)
            setImageUrl(res.snippet.thumbnails.high.url)
            setDescription(res.snippet.description)
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
                <ChannelProfile 
                    url = {imageUrl}
                    channeltitle={title}
                    description={description}
                />
                <SubContainer>
                    <ChannelTabs>
                        <NavLink to="featured" >HOME</NavLink>
                        <NavLink to="video" >VIDEOS</NavLink>
                        <NavLink to="live" >LIVE</NavLink>
                        <NavLink to="playlists" >PLAYLISTS</NavLink>
                        <NavLink to="community" >COMMUNITY</NavLink>
                        <NavLink to="channels" >CHANNELS</NavLink>
                        <NavLink to="about" >ABOUT</NavLink>
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
    a {
        text-decoration : none;
        color : gray;
        font-weight : 700;
        font-size : 17px;
        padding-inline : 30px;
    }
    a.active {
        color : #000;
        padding-bottom : 10px;
        border-bottom : 2px solid #000;
    }
`