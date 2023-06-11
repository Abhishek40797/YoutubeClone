import styled from "styled-components";
import { IVideosProps } from "../../Interfaces";
import SmallCardSkeleton from "../CardSkeleton";
import VideoCardDetails from "../VideoCardDetails";
import { useNavigate } from "react-router-dom";

interface IProps {
    isLoading : boolean,
    videos : IVideosProps[]
}

const SmallCardSkeletonComponent = ({isLoading,videos}:IProps)=>{
    const navigate  = useNavigate()
    return (
        <>
            {
                isLoading ? 
                    <>
                        <SmallCardSkeleton />
                        <SmallCardSkeleton /> 
                        <SmallCardSkeleton /> 
                        <SmallCardSkeleton /> 
                        <SmallCardSkeleton /> 
                        <SmallCardSkeleton />  
                    </> 
                    : 
                    videos.map((video,i)=>{
                        const {id,snippet} = video;
                        return (
                            <VideoCard key={i}>
                                <Img src={snippet.thumbnails.medium.url} alt=''  onClick={()=>navigate(`/watch/${id.videoId}`)} />
                                <VideoCardDetails
                                    videoId={id.videoId}
                                    channelId={snippet.channelId}
                                    channelTitle={snippet.channelTitle}
                                    title={snippet.title}
                                    publishedAt={snippet.publishedAt}
                                />
                            </VideoCard>
                        )
                    })
            }
        </>
    )
}

export default SmallCardSkeletonComponent;


const VideoCard = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 5px;
    cursor : pointer;
`

const Img = styled.img`
    width : 100%;
    object-fit : cover;
    height : 200px;
    border-radius : 10px;
    transition : .5s;
    &:hover {
        border-radius : 0;
    }
`