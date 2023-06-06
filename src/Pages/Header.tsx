import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { SearchHeader } from "../Components/HeaderSearch"
import { HeaderIcon } from "../Components/HeaderButton"

const Header = ()=>{
    return (
        <>
            <HeaderContainer>
                <LogoSection>
                    <HeaderIcon icon="fa-solid fa-bars" />
                    <NavLink to="/" className="brandname">
                        <Logo className="fa-brands fa-youtube"></Logo>
                        <H3>YouTube<Sup>IN</Sup></H3>
                    </NavLink>
                </LogoSection>
                <SearchHeader />
                <NotificationSection>
                    <HeaderIcon icon="fa-solid fa-video" /> 
                    <HeaderIcon icon="fa-solid fa-bell" />
                </NotificationSection>
            </HeaderContainer>
        </>
    )
}

export default Header;

const HeaderContainer = styled.header`
    width : 100%;
    position: sticky;
    top: 0;
    z-index: 99;
    left: 0%;
    padding : 10px 40px;
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    justify-content : space-between;
    background-color : #FFF;
    @media (max-width:${({theme})=>theme.responsive.mobile}) {
        padding-inline : 10px;
    }
`

const LogoSection = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
    .brandname {
        display : flex;
        align-items : center;
        gap : 3px;
        text-decoration : none;
        color : #000;
    }
`

const Sup = styled.sup`
    font-size : 10px;
`
const Logo = styled.i`
    color : #FF0000;
    font-size : 28px;
`
const H3 = styled.h3`
    font-size : 18px;
    font-weight : 700;
    @media (max-width:${({theme})=>theme.responsive.mobile}) {
        display : none;
    }
`

const NotificationSection = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
    font-size : 20px;
    @media (max-width:${({theme})=>theme.responsive.mobile}) {
        display : none;
    }
`