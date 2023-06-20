import { useParams } from "react-router-dom";
import styled from "styled-components";
import ChannelImage from "../Components/ChannelComponents/ChannelImage";
import ChannalName from "../Components/ChannelComponents/ChannalName";
import ChannelSubscibe from "../Components/ChannelComponents/ChannelSubscibe";
import { useGSelector } from "../redux-saga/store";
import UserComments from "../Components/Comments";
import RelatedVideos from "../Components/RelatedVideos";

const WatchVideos = ()=> {
    const {videoId} = useParams()
    const {videos,q} = useGSelector((state) => state.homeVideoData)
    const res =  videos.get(q)?.items.find((video) =>video.id.videoId === videoId);

    // const handleScroll = ()=>{
    //     if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight) {
    //         setResultShow(prev=>prev+6)
    //     }
    // }

    // useEffect(()=>{
    //     window.addEventListener("scroll",handleScroll)
    //     return window.addEventListener("scroll",handleScroll)
    // },[resultShow])



    return (
        <>
            <Container>
                <WatchSection>
                    <IFrame src={`https://www.youtube.com/embed/${res?.id.videoId}?autoplay=1`} title="YouTube video player" allow="autoplay"></IFrame>
                    <Title>{res?.snippet.title}</Title>

                    <ChannelNameSection>
                        <ChannelNameSectionLeft>
                            <ChannelImage url="" channelId={res?.snippet.channelId} />
                                <div>
                                    <ChannalName channalName={res?.snippet.channelTitle as string} />
                                    <P>{Math.floor(Math.random()*1000)}M subscibers</P>
                                </div>
                                <ChannelSubscibe />
                            </ChannelNameSectionLeft>
                    </ChannelNameSection>

                    <UserComments/>                    
                </WatchSection>
                    
                <RelatedVideos query={q} />

            </Container>
        </>
    )
}
export default WatchVideos;

const Container = styled.div`
    width : 90%;
    margin : 20px auto;
    display : flex;
    gap : 20px;
`

const WatchSection = styled.div`
    width : 70%;
`

const IFrame = styled.iframe`
    width : 100%;
    height : 550px;
    object-fit : cover;
`

const Title = styled.h3`
    font-size : 18px;
`

const ChannelNameSection = styled.div`
    display : flex;
    justify-content : space-between;
    margin-block : 10px;
`

const ChannelNameSectionLeft = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`

const P = styled.p`
    font-size : 12px;
`