import { useState } from 'react';
import styled from 'styled-components';
import Hero from './Hero';

const Category = [
    {
        icon : "assets/home-icon.png",
        name : "New"
    },
    {
        icon : "assets/shorts-icon.png",
        name : "Shorts"
    },
    {
        icon : "https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png",
        name : "Subscriptions"
    },
]

const SideBar = () => {

    const [selectedCategory,setSelectedCategoty] = useState<string>("New");
    
    return (
        <>
            <SideBarSection>
                {
                    Category.map((catName)=>{
                        const {icon,name} = catName;
                        return (
                            <NavSection onClick={()=>setSelectedCategoty(name)}>
                                <Img src={icon} alt="" />
                                <p>{name}</p>
                            </NavSection>
                        )
                    })
                }
            </SideBarSection>
            <Hero selectedCategory={selectedCategory} />
        </>
    );
}

export default SideBar;


const SideBarSection = styled.div`
    width : 17%;
    position : fixed;
    height : 100vh;
    display : flex;
    flex-direction : column;
    gap : 10px;
    overflow-y : auto;
    border-right : 1px solid #eeeeee;
    .menu-link {
        text-decoration : none;
        color : #000;
    }
`

const NavSection = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
    margin-inline : 10px;
    justify-content : flex-start;
    padding-block : 10px;
    font-size : 15px;
    border-radius : 10px;
    width : 90%;
    &:hover{
        background-color : #eeeeee;
    }
`

const Img = styled.img`
    width : 25%;
    padding-left : 40px;
`