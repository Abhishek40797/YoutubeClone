import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IVideosProps } from '../Interfaces';
import { fetchVideo } from '../APIs/fetchFromAPI';
import { useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import Filters from '../Components/Filters';
import { UploadDate } from '../utilis/Filters/UploadDate';
import { Type } from '../utilis/Filters/Type';
import { Duration } from '../utilis/Filters/Duration';
import { Features } from '../utilis/Filters/Features';
import { SortBy } from '../utilis/Filters/SortBy';
import ChannelProfile from '../Components/ChannelComponents/ChannelProfile';
import { PlaylistComponent } from '../Components/Playlists';
import SearchVideoCards from '../Components/SearchComponents/SearchVideosCard';


const SearchVideos = () => {
    const {categoryName} = useParams()

    const [videos,setVideos] = useState<IVideosProps[]>([]);
    const [filterVisibility,setFilterVisibility] = useState<boolean>(false)
    const [type,setType] = useState<string>("")
    const [resultShow,setResultShow] = useState(9)

    const getVideos = useCallback( async ()=>{
        try {
            const res = await fetchVideo(categoryName as string,type,"","viewCount",resultShow)
            setVideos(res)
        }
        catch(error) {
            console.log(error)
        }
    },[categoryName,type,resultShow])

    useEffect(()=>{
        getVideos()
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

    const handleFilter = (filtertype:string)=>{
        setType(filtertype)
        setFilterVisibility(false)
    }


    return (
        <>
            <SideBar />
            <Container>
                <FilterContainer>
                    <H4 onClick={()=>setFilterVisibility(!filterVisibility)}><I className="fa-solid fa-filter"></I>Filters</H4>

                    <Visibility display={`${filterVisibility ? "block" : "none"}`}>
                        <FilterSubContainer>
                            <Filters filters={UploadDate} handleFilter={handleFilter}/>
                            <Filters filters={Type} handleFilter={handleFilter} />
                            <Filters filters={Duration} handleFilter={handleFilter} />
                            <Filters filters={Features} handleFilter={handleFilter} />
                            <Filters filters={SortBy} handleFilter={handleFilter} />
                        </FilterSubContainer>
                    </Visibility>
                    
                </FilterContainer>

                {
                    videos.map((video,i)=>{
                        const {id,snippet} = video;
                        return (
                            // type === "Channel" ? 
                            //     <ChannelProfile 
                            //         key={i}
                            //         url = {snippet.thumbnails.default.url}
                            //         channeltitle = {snippet.channelTitle}
                            //         channelId = {snippet.channelId}
                            //     />
                                
                            //     :

                            //     type === "Playlist" ?
                            //         <PlaylistComponent
                            //             key={i}
                            //             playlistId ={id.playlistId}
                            //             url ={snippet.thumbnails.medium.url}
                            //             title={snippet.title}
                            //             channaltitle = {snippet.channelTitle}
                            //             channelId = {snippet.channelId}
                            //             description = {snippet.description}
                            //         /> :
                                    <SearchVideoCards
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
    padding-bottom : 10px;
    border-bottom : 1px solid #a9a9a9;
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

const Visibility = styled.div<{display:string}>`
    display : ${({display})=>display};
`

const FilterSubContainer = styled.div`
    margin: 10px 0 30px 0;
    display : flex;
    justify-content : space-between;
`