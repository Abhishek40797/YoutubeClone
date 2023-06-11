import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export const SearchHeader = ()=> {
    const navigate = useNavigate()
    const [searchItem,setSearchItem] = useState<string>("");

    const handleKeyPress = (e:React.KeyboardEvent)=>{
        if(e.key==="Enter") {
            handleSubmit()
        }
    }

    const handleSubmit = ()=>{
        if(searchItem.length>0) {
            navigate(`/search/${searchItem}`)
        }
    }

    return (
        <>
            <SearchSection>
                <Form onSubmit={(e)=>e.preventDefault()}>
                    <Input  
                        placeholder="Search" 
                        value={searchItem} 
                        spellCheck="false"
                        onChange={(e)=>setSearchItem(e.target.value)} 
                        onKeyUp={handleKeyPress}
                    /> 
                    <I className="fa-solid fa-magnifying-glass" onClick={handleSubmit}></I>
                </Form>
            </SearchSection>
        </>
    )
}

const SearchSection = styled.div`
    width : 40%;
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

const Form = styled.form`
    display : flex;
`