import styled from "styled-components"

export const SearchHeader = ()=> {
    return (
        <>
            <SearchSection>
                <Input placeholder="Search" /> 
                <I className="fa-solid fa-magnifying-glass"></I>
            </SearchSection>
        </>
    )
}

const SearchSection = styled.div`
    width : 40%;
    display : flex;
    align-items : center;
    @media (max-width:${({theme})=>theme.responsive.mobile}) {
        width : 70%;
    }
`

const Input = styled.input `
    width : 100%;
    border : 1px solid #eeeeee;
    outline : none;
    border-top-left-radius : 20px;
    border-bottom-left-radius : 20px;
    font-weight : bold;
    padding : 10px 20px;
    ::placeholder {
        font-size : 14px;
        font-weight : light;
    }
`

const I = styled.i`
    width : 70px;
    height : 43px;
    font-size : 17px;
    border-top-right-radius : 20px;
    border-bottom-right-radius : 20px;
    display : grid;
    place-items : center;
    background-color : #F8F8F8;
    cursor : pointer;
`