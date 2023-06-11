import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    playlistId : string,
    url : string,
    title : string,
    channaltitle : string,
    channelId : string,
    description : string
}

export const PlaylistComponent = (props : IProps) => {
    const {playlistId,url,title,channaltitle,channelId,description} = props;
    const navigate = useNavigate()
    return (
        <>
            <SearchView>
                <ImageContainer onClick={()=>navigate(`/playlist/${playlistId}`)}>
                    <Img src={url} alt='' />
                    <ImgFooter>
                        <P><i className="fa-solid fa-play"></i></P>
                        <P>11 videos</P>
                    </ImgFooter>
                </ImageContainer>
                <VideoContent>
                    <H3>{title}</H3>
                    <H5 onClick={()=>navigate(`/channel/${channelId}`)}>{channaltitle}</H5>
                    <P>{description.length?description:"Paapi Munda - Mankirt Aulakh Ft. Gur Sidhu | Kaptaan | Sukh Sanghera | New Punjabi Song 2020 4:00 Ek Din - BOHEMIA | Karan Aujla | J.Hind | The GAME | Shaxe Oriah | Sumeet S | New Punjabi Song 2021 4:55"}</P>
                    <H4 onClick={()=>navigate(`/playlist/${playlistId}`)}>VIEW FULL PLAYLIST</H4>
                </VideoContent>
            </SearchView>
        </>
    )
}

export default PlaylistComponent;

const SearchView = styled.div`
    width : 100%;
    margin-block : 20px;
    display : flex;
`

const ImageContainer  = styled.div`
    width : 50%;
`

const Img = styled.img`
    width : 100%;
    height : 250px;
    object-fit : cover;
    border-radius : 10px;
    cursor : pointer;
`
const ImgFooter = styled.div`
    margin-top : -30px;
    display : flex;
    justify-content : space-between;
    color : #FFF !important;
    background-color : #000;
    padding : 5px 10px;
    position : relative;
    border-bottom-left-radius : 10px;
    border-bottom-right-radius : 10px;
`

const VideoContent = styled.div`
    padding-inline : 18px;
    display : flex;
    flex-direction : column;
    gap : 5px;
    width : 70%;
`

const H3 = styled.h3`
    font-size : 16px;
    font-weight : 600;
    cursor : pointer;
`

const P = styled.p`
    font-size : 12px;
    color : ${({theme})=>theme.colors.textColor};
`
const H4 = styled.h4`
    font-size : 14px;
    color : ${({theme})=>theme.colors.textColor};
    cursor : pointer;
    &:hover {
        color : #000;
    }
`

const H5  = styled.h5`    
    font-size : 11px;
    cursor : pointer;
`