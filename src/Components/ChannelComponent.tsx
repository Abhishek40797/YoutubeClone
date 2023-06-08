import { useNavigate } from "react-router-dom";
import styled from "styled-components"

interface IChannel {
    width : string,
    height : string,
    url : string,
    channeltitle : string,
    channelId : string,
}

const ChannelProfile = ({width,height,url,channeltitle,channelId}:IChannel)=>{
    const navigate = useNavigate()
    return (
        <>
            <SubContainer onClick={()=>navigate(`/channel/${channelId}`)}>
                <ChannelDetail>
                    <Img src={url} width={width} alt='' height={height} />
                    <div>
                        <H3>{channeltitle}</H3>
                        <P>@mankirtaulakh4128•29 subscribers</P>
                    </div>
                </ChannelDetail>
                <Subscribe>Subscribe</Subscribe>
            </SubContainer>
        </>
    )
}

export default ChannelProfile;

const SubContainer = styled.div`
    width : 90%;
    margin : auto;
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin-block : 40px;
`

const ChannelDetail = styled.div`
    width : 100%;
    display : flex;
    gap : 30px;
    align-items : center;
`

const Img = styled.img<{width:string,height:string}>`
    width : ${({width})=>width};
    height : ${({height})=>height};
    border-radius : 50%;
`

const H3 = styled.h3`
    font-size : 20px;
    padding-bottom : 5px;
`
const P = styled.p`
    font-size : 12px;
`

const Subscribe = styled.button`
    border : none;
    outline : none;
    color : #FFF;
    background-color : #000;
    padding : 10px 20px;
    font-weight : 700;
    border-radius : 20px;
    cursor : pointer;
`