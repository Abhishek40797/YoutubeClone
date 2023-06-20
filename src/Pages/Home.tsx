import { useState } from 'react';
import styled from 'styled-components';
import { Category } from '../utilis/Category';
import SideBar from '../Components/SideBar';
import HomeVideosSection from '../Components/HomeComponents/HomeVideosSection';
import CategoryBy from '../Components/HomeComponents/HomeCategory';

const Home = () => {

    const [selectedCategory,setSelectedCategroy] = useState<string>("All")
    const [active,setActive] = useState<string>("All")
    
    const handleCategory = (category:string)=>{
        setSelectedCategroy(category)
        setActive(category)
    }

    return (
        <>            
            <SideBar />        
            <CategorySection>
            {
                Category.map((catName,i)=>{
                    const {name} = catName;
                    return (
                        <CategoryBy key={i} categoryName={name} getCategory={handleCategory} active={active} />
                    )
                })
            }
            </CategorySection>
            <HomeVideosSection categoryName={selectedCategory} />            
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