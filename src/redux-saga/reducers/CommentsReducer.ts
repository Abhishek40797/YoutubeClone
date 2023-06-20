import { CommentInitialState } from "../../Interfaces/Comments"
import { CommentsState, FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS } from "../actions/CommentsActionTypes"

const CommentInitialValues:CommentInitialState = {
    commentItems : new Map(),
    loading : false,
    error : null,
    pageToken : ""
}

export const commentReducer = (state=CommentInitialValues,action:CommentsState)=>{
    switch(action.type){
        case FETCH_COMMENTS_START :
            return {
                ...state,
                loading : true
            }

        case FETCH_COMMENTS_SUCCESS :
            const {videoid,items} = action.payload;
            const copyMap = new Map(state.commentItems)
            const isExisting = copyMap.get(videoid)
            if(isExisting) {
                const copyData = {
                    nextPageToken : items?.nextPageToken,
                    items : items?.items
                }
                copyMap.set(videoid,copyData)
            }
            else {
                copyMap.set(videoid,{nextPageToken:items?.nextPageToken,items:items?.items})
            }
            return {
                ...state,
                loading : false,
                commentItems : copyMap
            }

        default : return state
    }
}