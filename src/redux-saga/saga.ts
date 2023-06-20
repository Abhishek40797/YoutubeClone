import {takeLatest,all,put,fork,call} from 'redux-saga/effects'
import { fetchComments, fetchVideos } from '../APIs/redux-api'
import * as types from './actions/HomeActionTypes'
import { IVideoData } from '../Interfaces/Video'
import * as commentTypes from '../redux-saga/actions/CommentsActionTypes'
import { ICommentsActionProps } from '../Interfaces/Comments'
// import * as watchTypes from './actions/WatchActionTypes'
// import { IWProps } from '../Interfaces/WatchPage'


function* onloadVideoAsync({payload}:any) {
    const {q,pageToken} = payload;
    try {
        const res:IVideoData = yield call(fetchVideos,{q:q,pageToken:pageToken})
        yield put(types.fetchVideoSuccess(res))
    }
    catch(error:any) {
        yield put(types.fetchVideoFail(error))
    }
}

function* onloadVideo() {
    yield takeLatest(types.FETCH_API_START,onloadVideoAsync)
}

//-------------------------------------Video Watch Section---------------------------------------------//

// function * onloadWatchVideoAsync(payload:any) {
//     const {videoId} = payload.payload;
//     try {
//         const res:IWProps = yield call(fetchWatchData,videoId)
//         yield put(watchTypes.watchVideoSuccess(res))
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// function* onloadWatchVideo() {
//     yield takeLatest(watchTypes.FETCH_WATCH_VIDEO_START,onloadWatchVideoAsync)
// }


//---------------------------------------------Comments Section-----------------------------------------//

function* onloadCommentAsync({payload}:any) {
    try {
        const res:ICommentsActionProps = yield call(fetchComments,payload)
        yield put(commentTypes.fetchCommentsSuccess(res))
    }
    catch(error) {
        console.log(error)
    }
}

function* onloadComments() {
    yield takeLatest(commentTypes.FETCH_COMMENTS_START,onloadCommentAsync)
}


const youtubeSaga = [fork(onloadVideo),fork(onloadComments)]

export function* rootSaga() {
    yield all([...youtubeSaga]);
}