import { useState } from 'react';
import styled from 'styled-components';
import { Category } from '../utilis/Category';
import HeroSection from '../Components/HeroSection';
import SideBar from '../Components/SideBar';

const Home = () => {

    const [selectedCategory,setSelectedCategroy] = useState<string>("All")

    return (
        <>            
            <SideBar />        
            <CategorySection>
            {
                Category.map((catName,i)=>{
                    const {name} = catName;
                    return (
                        <H3 key={i}  onClick={()=>setSelectedCategroy(name)}>{name}</H3>
                    )
                })
            }
            </CategorySection>
            <HeroSection categoryName={selectedCategory} />            
        </>
    )
}

export default Home;

const CategorySection = styled.div`
    margin-left : 20%;
    display : flex;
    overflow-x : auto;
    gap : 20px;
    position : fixed;
    padding : 10px;
    background-color : #FFF;
    width : 100%;
`

const H3 = styled.h3`
    padding : 5px 15px;
    font-size : 15px;
    border-radius : 5px;
    background-color : ${({theme})=> theme.colors.bg };
    cursor : pointer;
`