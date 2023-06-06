import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICategroy, IHeroVideos } from '../Interfaces';
import { fetchVideo } from '../APIs/fetchFromAPI';
import HeroVideos from './HeroVideos';

const HeroSection = ({categoryName}:ICategroy) => { 
    const [videos,setVideos] = useState<IHeroVideos[]>([]);
    const [page,setPage] = useState(1)

    useEffect(()=>{
        const getVideos = async ()=>{
            try {
                const res = await fetchVideo(categoryName)
                setVideos(res)
            }
            catch(error) {
                console.log(error)
            }
        }
        getVideos()
    },[categoryName])

    // const handleScrolling = ()=>{
    //     if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
    //         setPage((prev)=> prev + 1)
    //     }
    // }

    // useEffect(()=>{
    //     window.addEventListener("scroll",handleScrolling)
    //     return ()=> window.removeEventListener("scroll",handleScrolling)
    // },[])

    return (
        <>
            <Container>
                <VideoContainer>
                    {
                        videos.map((video,i)=>{
                            const {id,snippet} = video;
                            return (
                                <HeroVideos
                                   key={i}
                                   videoId={id.videoId}
                                   thumbnail={snippet.thumbnails.medium.url}   
                                   title={snippet.title}  
                                   channalName={snippet.channelTitle}                               
                                />
                            )
                        })
                    }
                </VideoContainer>
            </Container>
        </>
    );
}

export default HeroSection;


const Container = styled.div`
    width : 75%;
    margin-top : 5%;
    margin-left : 23%;
`

const VideoContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    gap : 20px;
`