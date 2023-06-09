import { IVideosProps } from "../../Interfaces";
import SmallCardSkeleton from "../CardSkeleton";
import HomeVideos from "../HeroVideos";

interface IProps {
    isLoading : boolean,
    videos : IVideosProps[]
}

const SmallCardSkeletonComponent = ({isLoading,videos}:IProps)=>{
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
                            <HomeVideos 
                                key={i}
                                videoId={id.videoId}
                                thumbnail={snippet.thumbnails.medium.url}   
                                title={snippet.title}  
                                channalName={snippet.channelTitle}                               
                            />
                        )
                    })
            }
        </>
    )
}
export default SmallCardSkeletonComponent;