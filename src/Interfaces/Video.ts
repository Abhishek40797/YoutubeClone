import { IVideosProps } from ".";

export interface IinitState {
    youTubeVideo : IVideosProps[],
    loading : boolean,
    error : string | null,
    pageToken : string,
    q : string
}

export interface IVideoState {
    videos : Map<string,{nextPageToken:string,items:IVideosProps[]}>
    loading : boolean,
    error : null,
    q : string
}

export interface IVideo {
    nextPageToken : string,
    items : IVideosProps[]
}

export interface IVideoData {
    key : string,
    value : IVideo
}

export interface IVideoFail {
    message : string
}

