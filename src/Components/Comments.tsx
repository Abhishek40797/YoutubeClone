import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HeaderIcon } from './HeaderButton';
import ChannelImage from './ChannelComponents/ChannelImage';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { fetchCommentsStart } from '../redux-saga/actions/CommentsActionTypes';
import { useGSelector } from '../redux-saga/store';
import { useParams } from 'react-router-dom';

const UserComments = () => {
    const { videoId } = useParams();
    const dispatch = useDispatch()    
    const {commentItems} = useGSelector((state)=>state.commentData)
    // const res = videoId && commentItems.get(videoId)?.items
    console.log(commentItems)

    useEffect(()=>{
        if(videoId&&commentItems.has(videoId)) {
            return;
        }
        if(videoId) {
            dispatch(fetchCommentsStart({videoId:videoId}))
        }
    },[dispatch,videoId,commentItems])

    return (
        <>
            <CommentSection>
                <P>Comments</P>
                {
                    videoId &&  commentItems.get(videoId)?.items.map((item,i)=>{
                        const {snippet} = item
                        const {textDisplay,authorDisplayName,authorProfileImageUrl,updatedAt} = snippet.topLevelComment.snippet
                        return (
                            <Comments key={i}>
                                <ChannelImage url={authorProfileImageUrl} />
                                <CommentInfo>
                                    <H6>{authorDisplayName}<Span>{moment(updatedAt).fromNow()}</Span></H6>
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
    margin-block : 20px;
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