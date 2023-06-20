import { IPlayVideo, IWProps } from "../../Interfaces/WatchPage"

export const FETCH_WATCH_VIDEO_START = "FETCH_WATCH_VIDEO_START"
export const FETCH_WATCH_VIDEO_SUCCESS = "FETCH_WATCH_VIDEO_SUCCESS"
export const FETCH_WATCH_VIDEO_FAIL = "FETCH_WATCH_VIDEO_FAIL"

interface IWatchStart {
    type : typeof FETCH_WATCH_VIDEO_START,
    payload : IPlayVideo
}

export const getWatchVIdeo = (payload:IPlayVideo):IWatchStart=>{
    return {
        type : FETCH_WATCH_VIDEO_START,
        payload
    }
}



interface IWatchSuccess {
    type : typeof FETCH_WATCH_VIDEO_SUCCESS,
    payload : IWProps
}

export const watchVideoSuccess = (payload:IWProps):IWatchSuccess=>{
    return {
        type : FETCH_WATCH_VIDEO_SUCCESS,
        payload
    }
}

export type WatchPageStates = IWatchStart | IWatchSuccess