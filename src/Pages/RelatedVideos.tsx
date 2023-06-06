import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IWatchProps } from '../Interfaces';
import { fetchWatchVideo } from '../APIs/fetchFromAPI';
import { useParams } from 'react-router-dom';
import { Image } from '../utilis/components'

const RelatedVideos = () => {

    const {videoId} = useParams()
    const [video,setVideo] = useState<IWatchProps[]>([])
    const [details,setDetails] = useState({
        id : "",
        snippet : {
            title : "",
        }
    })
    const [videolink,setVideolink] = useState("")

    useEffect(()=>{
        const getVideoDetails = async ()=>{
            try {
                const res = await fetchWatchVideo("relatedToVideoId",videoId as string)
                console.log(res)
                setDetails({
                    id : video[0].id,
                    snippet : {
                        title : video[0].snippet.title
                    }
                })
                setVideolink(`https://www.youtube.com/embed/${details.id}`)
            }
            catch(err) {
                console.log(err)
            }
        }
        getVideoDetails()
    })

    return (
        <>
            <Container>

                <SearchView>
                    <Image width="45%" height="110px" />
                    <VideoContent>
                        <H3>Bhabi (Official Video) Mankirt Aulakh Ft Mahira Sharma</H3>
                        <H5>Tips Offical</H5>
                        <P>76K views . <span>5 Days ago</span></P>
                    </VideoContent>
                </SearchView>

            </Container>
        </>
    );
}

export default RelatedVideos;

const Container = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 20px;
`

const SearchView = styled.div`
    display : flex;
`

const Img = styled.img`
    width : 45%;
    height : 110px;
    object-fit : cover;
    border-radius : 10px;
    cursor : pointer;
`

const VideoContent = styled.div`
    padding-inline : 18px;
    display : flex;
    flex-direction : column;
    gap : 5px;
`

const H3 = styled.h3`
    font-size : 13px;
    font-weight : 600;
    cursor : pointer;
`

const P = styled.p`
    font-size : 12px;
    color : ${({theme})=>theme.colors.textColor};
`

const H5  = styled.h5`
    font-size : 13px;
    cursor : pointer;
    color : ${({theme})=>theme.colors.textColor};
`