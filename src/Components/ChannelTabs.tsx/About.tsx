import styled from "styled-components"
import { HeaderIcon } from "../HeaderButton"

export const ChannelAbout = ()=>{
    return (
        <>
            <Container>
                <Description>
                    <P>Description</P>
                </Description>
                <Stats>
                    <P>Stats</P>
                    <P>Joined Apr 4,2018</P>
                    <P>310 views</P>
                    <Icons>
                        <HeaderIcon icon="fa-regular fa-flag" />
                        <HeaderIcon icon="fa-solid fa-share" />
                    </Icons>
                </Stats>
            </Container>
        </>
    )
}

const Container = styled.div`
    width : 90%;
    margin : 50px auto;
    display : flex;
    justify-content : space-between;
`

const Description = styled.div`

`

const P = styled.p`
    font-size : 15px;
    padding-block : 13px;
    border-bottom : 1px solid gray;
`

const Stats = styled.div`
    width : 30%;
`

const Icons = styled.div`
    display  : flex;
    padding-top : 20px;
    gap : 10px;
`