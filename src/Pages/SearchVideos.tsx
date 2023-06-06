import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IHeroVideos } from '../Interfaces';
import { fetchVideo } from '../APIs/fetchFromAPI';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import FeedVideos from './FeedVideos';
const SearchVideos = () => {

    const {categoryName} = useParams()

    const [videos,setVideos] = useState<IHeroVideos[]>([]);
    const [page,setPage] = useState(1)

    useEffect(()=>{
        const getVideos = async ()=>{
            try {
                const res = await fetchVideo(categoryName as string)
                setVideos(res)
            }
            catch(error) {
                console.log(error)
            }
        }
        getVideos()
    },[categoryName])

    const handleScrolling = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setPage((prev)=> prev + 1)
        }
    }

    // useEffect(()=>{
    //     window.addEventListener("scroll",handleScrolling)
    //     return ()=> window.removeEventListener("scroll",handleScrolling)
    // },[])


    return (
        <>
            <SideBar />
            <Container>
                <FilterContainer>
                    <H4><I className="fa-solid fa-filter"></I>Filters</H4>
                </FilterContainer>

                {
                    videos.map((video,i)=>{
                        const {id,snippet} = video;
                        return (
                            <FeedVideos 
                                key={i}
                                videoId={id.videoId}
                                thumbnail = {snippet.thumbnails.medium.url}
                                title={snippet.title}  
                                channalName={snippet.channelTitle}
                                published={snippet.publishedAt}
                                channelid={snippet.channelId}  
                            />
                        )
                    })
                }

            </Container>
        </>
    )
}

export default SearchVideos;

const Container = styled.div`
    width : 75%;
    margin-top : 1%;
    margin-left : 20%;
`

const FilterContainer = styled.div`
    width : 100%;
    border-bottom : 1px solid gray;
`

const H4 = styled.h4`
    width : 10%;
    font-size : 15px;
    cursor : pointer;
    padding : 8px;
    border-radius : 10px;
    &:hover {
        background-color : ${({theme})=>theme.colors.bg}
    }
`

const I = styled.i`
    padding-right : 10px;
    font-size : 20px;
`