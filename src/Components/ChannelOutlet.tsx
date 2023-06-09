import styled from "styled-components"
import { ChannelHome } from "./ChannelTabs.tsx/Home"
import { useParams } from "react-router-dom"

export const ChannelOutlet = ()=>{
    const {channelId} = useParams()
    // console.log(channelId)
    return (
        <>
            <Container>
                {
                    
                }
            </Container>
        </>
    )
}

const Container = styled.div`
    width : 90%;
    margin : auto;
`

