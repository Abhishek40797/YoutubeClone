import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICategroy, IVideosProps } from '../../Interfaces';
import { fetchVideo } from '../../APIs/fetchFromAPI';
import SmallCardSkeletonComponent from '../SkeltonComponents/SmallCardSkeltonComponent';

const HomeVideosSection = ({categoryName}:ICategroy) => { 
    const [videos,setVideos] = useState<IVideosProps[]>([]);
    const [isloading,setLoading] = useState(true)
    const [resultShow,setResultShow] = useState(9)

    const getVideos = useCallback(async ()=>{
        try {
            const res = await fetchVideo(categoryName,"","","date",resultShow)
            setVideos(res)
        }
        catch(error) {
            console.log(error)
        }
    },[categoryName,resultShow])

    useEffect(()=>{        
       setTimeout(()=>{
        getVideos()
        setLoading(false)
       },1000)
    },[getVideos])

    const handleScroll = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight) {
            setResultShow(prev=>prev+6)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return window.addEventListener("scroll",handleScroll)
    },[resultShow])


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

export default HomeVideosSection;


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