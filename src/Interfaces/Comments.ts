import { ICommentsProps } from ".";

export interface ICommentsData {
    nextPageToken : string,
    items : ICommentsProps[]
}

export interface ICommentsActionProps {
    videoid : string,
    items : ICommentsData
}

export interface CommentInitialState {
    commentItems : Map<string,{nextPageToken:string,items:ICommentsProps[]}>
    loading : boolean,
    error : string | null,
    pageToken : string,
}