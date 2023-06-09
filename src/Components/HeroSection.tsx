import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICategroy, IVideosProps } from '../Interfaces';
import { fetchVideo } from '../APIs/fetchFromAPI';
import SmallCardSkeletonComponent from './SkeltonComponents/SmallCardSkeltonComponent';

const HeroSection = ({categoryName}:ICategroy) => { 
    const [videos,setVideos] = useState<IVideosProps[]>([]);
    // const [page,setPage] = useState(1)
    const [isloading,setLoading] = useState(true)

    const getVideos = useCallback(async ()=>{
        try {
            const res = await fetchVideo(categoryName,"",1,"","")
            setVideos(res)
        }
        catch(error) {
            console.log(error)
        }
    },[categoryName])

    useEffect(()=>{        
       setTimeout(()=>{
        getVideos()
        setLoading(false)
       },2000)
    },[getVideos])

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
                    <SmallCardSkeletonComponent
                        isLoading = {isloading}
                        videos={videos}
                    />
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