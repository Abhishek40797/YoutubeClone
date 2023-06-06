import styled from 'styled-components';
import { Category } from '../utilis/Category';

const SideBar = () => {    
    return (
        <>
            <SideBarSection>
                {
                    Category.map((catName,i)=>{
                        const {icon,name} = catName;
                        return (
                            <NavSection key={i}>
                                <I className={`${icon}`}></I>
                                <p>{name}</p>
                            </NavSection>
                        )
                    })
                }
            </SideBarSection>
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

const I = styled.i`
    font-size : 18px;
    padding-left : 40px;
`