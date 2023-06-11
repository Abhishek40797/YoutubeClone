import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import ChannelSubscibe from "./ChannelSubscibe";

interface IChannel {
    url : string,
    channeltitle : string,
    channelId? : string,
    description? : string
}

const ChannelProfile = ({url,channeltitle,channelId,description}:IChannel)=>{
    const navigate = useNavigate()
    return (
        <>
            <SubContainer onClick={()=>channelId?navigate(`/channel/${channelId}`):""}>
                <ChannelDetail>
                    <Img src={url} />
                    <div>
                        <H3>{channeltitle}</H3>
                        <P>@{channeltitle}  {Math.floor(Math.random()*50)}M subscibers {Math.floor(Math.random()*200)} videos</P>
                        {description?.length ?  !channelId&&<Des onClick={()=>navigate(`about`)}>{description?.slice(0,45)}, <I className='fas fa-angle-right'></I></Des>:""}
                    </div>
                </ChannelDetail>
                <ChannelSubscibe />
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

const Img = styled.img`
    width : 110px;
    height : 110px ;
    border-radius : 50%;
`

const H3 = styled.h3`
    font-size : 20px;
    padding-bottom : 5px;
`
const P = styled.p`
    font-size : 15px;
`

const Des = styled.p`
    padding-block : 10px;
    cursor: pointer;    
`
const I = styled.i`
    padding-left : 10px;
    font-size : 20px;
`