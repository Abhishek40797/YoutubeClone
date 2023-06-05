import React from 'react';
import styled from 'styled-components';

interface IProps {
    selectedCategory:string
}

const Hero = ({selectedCategory}:IProps) => {
    return (
        <>
            <Container>
                <HeroHeading>
                    <H2>{selectedCategory}</H2>
                    <H3>Videos</H3>
                </HeroHeading>
            </Container>
        </>
    )
}

export default Hero;

const Container = styled.div`
    width : 75%;
    margin-left : 18%;
    background-color : yellow;
`

const HeroHeading = styled.div`
    display : flex;
    align-items : center;
`

const H2 = styled.h2`
    font-size : 22px;
    margin-right : 10px;
`
const H3 = styled.h3`
    font-size : 16px;
`