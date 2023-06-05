import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchVideo } from '../APIs/fetchFromAPI';
import HeroVideos from '../Components/HeroVideos';

const Hero = () => {

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        fetchVideo().then(data=>setVideos(data))
    },[])

    return (
        <>
            <Container>
                <VideoContainer>
                    {
                        videos.map((video)=>{
                            console.log(video)
                            return (
                                // <HeroVideos 
                                //     thumbnail = {video.snippet.thumbnails.}
                                    
                                // />
                                <>
                                </>
                            )
                        })
                    }
                </VideoContainer>
            </Container>
        </>
    )
}

export default Hero;

const Container = styled.div`
    width : 75%;
    margin-top : 2%;
    margin-left : 23%;
`

const VideoContainer = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    gap : 20px;
`