import React from 'react';
import styled from 'styled-components';
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SmallCardSkeleton = () => {
    return (
        <>
            <SkeletonTheme highlightColor="#FFF">
                <SkeletonContainer>
                    <Skeleton height={200} />
                    <Skeleton />
                    <Skeleton />                                        
                </SkeletonContainer>                                    
            </SkeletonTheme>
        </>
    )
}

export default SmallCardSkeleton;


const SkeletonContainer = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 5px;
`