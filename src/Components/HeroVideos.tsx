import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IVideos {
    videoId : string,
    thumbnail : any,
    title : string,
    channalName : string,
}

const HomeVideos = (props:IVideos) => {
    const {videoId,thumbnail,title,channalName} = props
    const navigate  = useNavigate()
    
    return (
        <>
            <View onClick={()=>navigate(`/watch/${videoId}`)}>
                <Img src={thumbnail} alt='' />
                <H3>{title}</H3>
                <P>{channalName}</P>
                <ViewCount>
                    <P>{Math.floor(Math.random()*1000)}M views</P>
                    <I className="fa-solid fa-circle"></I>
                    <P>5 days ago</P>
                </ViewCount>
            </View>
        </>
    );
}

export default HomeVideos ;


const View = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 5px;
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

const H3 = styled.h3`
    font-size : 13px;
`
const P = styled.p`
    font-size : 13px;
    color : gray;
`
const ViewCount = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
`

const I = styled.i`
    font-size : 5px;
    color : gray;
`