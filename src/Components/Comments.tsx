import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeaderIcon } from './HeaderButton';
import { fetchComments } from '../APIs/fetchFromAPI';
import { ICommentsProps } from '../Interfaces';
import { useParams } from 'react-router-dom';

const UserComments = () => {
    const {videoId} = useParams()
    const [comments,setComments] =  useState<ICommentsProps[]>([])
    
    const getComments = useCallback( async ()=>{
        try {
            const res = await fetchComments("commentThreads",videoId as string)
            setComments(res)
        }
        catch(err) {
            console.log(err)
        }
    },[videoId])

    useEffect(()=>{
        getComments()
    },[getComments])

    return (
        <>
            <CommentSection>
                <P>4,099 Comments</P>
                {
                    comments.map((comment,i)=>{
                        const {snippet} = comment
                        const {textDisplay,authorDisplayName,authorProfileImageUrl,authorChannelId,updatedAt} = snippet.topLevelComment.snippet
                        return (
                            <Comments key={i}>
                                <Img src={!authorProfileImageUrl.length ? "https://yt3.ggpht.com/ytc/AGIKgqMZ6MdV3I1EGdAbfGBH1T85vlGm2RrfPy-ZYPpMUg=s48-c-k-c0x00ffffff-no-rj" : authorProfileImageUrl } alt="" />
                                <CommentInfo>
                                    <H6>{authorDisplayName}<Span>{updatedAt}</Span></H6>
                                    <CommentLine>{textDisplay}</CommentLine>
                                    <Likes>
                                        <HeaderIcon icon="fa-regular fa-thumbs-up" />
                                        <HeaderIcon icon="fa-regular fa-thumbs-down fa-flip-horizontal" />
                                        <Span>Reply</Span>
                                    </Likes>
                                </CommentInfo>
                            </Comments>      
                        )
                    })
                }
            </CommentSection>
        </>
    )
}

export default UserComments;


const CommentSection = styled.div`
    margin-block : 50px;
`
const P = styled.p`
    font-size : 17px;
    color : #000;
`

const Comments = styled.div`
    margin-top : 20px;
    display : flex;
    gap : 10px;
    align-items : flex-start;
`

const Img = styled.img`
    width : 5%;
    border-radius : 50%;
`

const CommentInfo = styled.div`

`

const H6 = styled.h6`
    font-size : 13px;
`

const CommentLine = styled.p`
    padding-top : 5px;
    font-size : 15px;
`

const Span = styled.span`
    font-size : 13px;
    padding-left : 10px;
`

const Likes = styled.div`
    display : flex;
    gap : 5px;
    align-items : center;
`