import { IVideoState } from "../../Interfaces/Video"
import { FETCH_API_FAIL, FETCH_API_START, FETCH_API_SUCCESS, SET_CATEGORY, YouTubeActions } from "../actions/HomeActionTypes"

const videoInitialState:IVideoState = {
    videos : new Map(),
    loading : false,
    error : null ,
    q:""
}

export const homeVideoReducer = (state=videoInitialState,action:YouTubeActions):IVideoState=>{
    switch(action.type) {
        case FETCH_API_START : 
            return {
                ...state,
                loading : true,
            }

        case FETCH_API_SUCCESS : 
            const {key,value:{nextPageToken,items}} = action.payload
            const copyMap = new Map(state.videos)
            const existingData = copyMap.get(key)

            if(existingData) {
                const copyData = {
                    nextPageToken : nextPageToken,
                    // items : [...existingData.items,...items]
                    items : items
                }
                copyMap.set(key,copyData)              
            }
            else {
                copyMap.set(key,{nextPageToken:nextPageToken,items:items})
            }
            return {
                ...state,
                loading : false,
                videos : copyMap
            }
    
        case FETCH_API_FAIL : 
            return {
                ...state,
                loading : false,
                error : action.payload.message
            }

        case SET_CATEGORY :
            return {
                ...state,
                q : action.payload
            }
        default : return state;
    }
}