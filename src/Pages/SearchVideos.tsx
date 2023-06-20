import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import SearchVideoCards from '../Components/SearchComponents/SearchVideosCard';
import FilterCard from '../Components/FilterCard';
import { useDispatch } from 'react-redux';
import { useGSelector } from '../redux-saga/store';
import { getYouTubeVideos, setCategory } from '../redux-saga/actions/HomeActionTypes';

type VideoType = "video" | "channel" | "";
type Duration = "any" | "long" | "medium" | "";
type UploadDate = "Today" | "This Week" | "";

export interface SearchParams {
    videoType: VideoType;
    duration: Duration;
    uploadDate: UploadDate;
}

const SearchVideos = () => {
    const {query} = useParams<{query : any}>()
    const [filterVisibility,setFilterVisibility] = useState<boolean>(false)
    const [filterValues, setFilterValues] = useState<SearchParams>({
        uploadDate: "",
        duration: "",
        videoType: "",
    });
    const dispatch = useDispatch();
    const {videos} = useGSelector((state) => state.homeVideoData)

    useEffect(()=>{
        if(videos.has(query)) {
            return;
        }
        dispatch(getYouTubeVideos({q:query}))
    },[dispatch,query,videos])

    useEffect(()=>{
        dispatch(setCategory(query))
    },[dispatch,query])


    return (
        <>
            <SideBar />
            <Container>
                <FilterContainer>
                    <H4 onClick={()=>setFilterVisibility(!filterVisibility)}><I className="fa-solid fa-filter"></I>Filters</H4>

                    <Visibility display={`${filterVisibility ? "block" : "none"}`}>
                        <FilterCard
                            filterValues={filterValues}
                            onFilterChange={(newValues) => {
                                setFilterValues(newValues);
                            }}
                        />
                    </Visibility>
                    
                </FilterContainer>

                {
                    videos.get(query)?.items.map((video,i)=>{
                        return (
                            <SearchVideoCards key={i} videoData={video}       />
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