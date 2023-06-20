import { IVideoData } from "../../Interfaces/Video"
import { IVideoSearchParams } from "../../Interfaces/params"

export const FETCH_API_START = "FETCH_API_START"
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS"
export const FETCH_API_FAIL = "FETCH_API_FAIL"

interface GetVideos {
    type : typeof FETCH_API_START ,
    payload : IVideoSearchParams
}
export const getYouTubeVideos = (payload:IVideoSearchParams):GetVideos=>{
    return {
        type : FETCH_API_START,
        payload
    }
}


interface VideoFetchSuccess {
    type : typeof FETCH_API_SUCCESS,
    payload : IVideoData,
}

export const fetchVideoSuccess = (payload:IVideoData):VideoFetchSuccess=>{
    return {
        type : FETCH_API_SUCCESS,
        payload,
    }
}

interface VideoFetchFail {
    type : typeof FETCH_API_FAIL,
    payload : any
}

export const fetchVideoFail = (payload:any):VideoFetchFail =>{
    return {
        type : FETCH_API_FAIL,
        payload
    }
}

export const SET_CATEGORY = "SET_CATEGORY"

interface SetCategory {
    type : typeof SET_CATEGORY,
    payload : string
}

export const setCategory = (payload:string):SetCategory =>{
    return {
        type : SET_CATEGORY ,
        payload
    }
}


export type YouTubeActions = GetVideos | VideoFetchSuccess | VideoFetchFail | SetCategory;