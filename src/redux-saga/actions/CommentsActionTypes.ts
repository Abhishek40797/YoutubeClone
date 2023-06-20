import { IComments } from "../../APIs/redux-api"
import { ICommentsActionProps } from "../../Interfaces/Comments"

export const FETCH_COMMENTS_START = "FETCH_COMMENTS_START"
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS"
export const FETCH_COMMENTS_FAIL = "FETCH_COMMENTS_FAIL"

interface FetchComments {
    type : typeof FETCH_COMMENTS_START,
    payload : IComments
}

export const fetchCommentsStart = (payload:IComments):FetchComments=> {
    
    return {
        type : FETCH_COMMENTS_START,
        payload
    }
}

interface FetchCommentsSuccess {
    type : typeof FETCH_COMMENTS_SUCCESS,
    payload : ICommentsActionProps
}

export const fetchCommentsSuccess = (payload:ICommentsActionProps):FetchCommentsSuccess=> {
    return {
        type : "FETCH_COMMENTS_SUCCESS",
        payload
    }
}


export type CommentsState = FetchComments | FetchCommentsSuccess