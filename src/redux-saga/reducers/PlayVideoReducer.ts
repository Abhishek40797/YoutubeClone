import { IWatchVideoProps } from "../../Interfaces/WatchPage"
import { FETCH_WATCH_VIDEO_START, FETCH_WATCH_VIDEO_SUCCESS, WatchPageStates } from "../actions/WatchActionTypes"

const initialState:IWatchVideoProps = {
    watchData : new Map(),
    loading : false,
    error : null
}

export const watchVideoReducer = (state=initialState,action:WatchPageStates)=>{
    switch(action.type) {
        case FETCH_WATCH_VIDEO_START: 
            return {
                ...state,
                loading : true,
            }
        case FETCH_WATCH_VIDEO_SUCCESS :
            const {videoId,value} = action.payload;
            const copyMap = new Map(state.watchData)
            const existingData = copyMap.get(videoId)

            if(existingData) {
                const copyData = {
                    watchData : value
                }
                copyMap.set(videoId,copyData)
            }
            else {
                copyMap.set(videoId,value)
            }

            return {
                ...state,
                loading : false,
                watchData : copyMap,
            }
        default : return state
    }
}