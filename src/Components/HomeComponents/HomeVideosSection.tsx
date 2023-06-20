import { useEffect } from 'react';
import styled from 'styled-components';
import { ICategroy } from '../../Interfaces';
import { useDispatch } from "react-redux";
import { getYouTubeVideos, setCategory } from '../../redux-saga/actions/HomeActionTypes';
import { useGSelector } from '../../redux-saga/store';
import HomeVideoCards from './HomeVideoCards';

const HomeVideosSection = ({categoryName}:ICategroy) => { 
    const dispatch = useDispatch()
    const {videos} = useGSelector((state) => state.homeVideoData)
    // const pageToken = videos.get(categoryName)?.nextPageToken

    useEffect(()=>{
        if(videos.has(categoryName)) {
            return;
        }
        dispatch(getYouTubeVideos({q:categoryName}))
    },[dispatch,categoryName,videos])

    useEffect(()=>{
        dispatch(setCategory(categoryName))
    },[dispatch,categoryName])

    return (
        <>
            <Container>
                <VideoContainer>
                {
                    videos.get(categoryName)?.items.map((video,i)=>{
                        return (
                            <HomeVideoCards videoData={video} key={i} />
                        )
                    })
                }  
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