import styled from 'styled-components';

interface IVideos {
    videoId : string,
    thumbnail : string,
    title : string,
    channalName : string,
}

const HeroVideos = (props:IVideos) => {
    const {videoId,thumbnail,title,channalName} = props
    return (
        <>
            <View>
                <Img src={thumbnail} alt='' />
                <H3>{title}</H3>
                <P>{channalName}</P>
            </View>
        </>
    );
}

export default HeroVideos;


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