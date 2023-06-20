import { IWatchProps } from "."

export interface IPlayVideo {
    videoId : any
}

export interface IWProps {
    videoId : any,
    value : IWatchProps[]
}

export interface IWatchVideoProps {
    watchData : Map<any,any>,
    loading : boolean,
    error : null
}