import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga";
import { combineReducers } from "redux";
import { homeVideoReducer } from '../redux-saga/reducers/youTubeReducer';
import { shallowEqual, useSelector } from "react-redux";
import { IVideoState } from "../Interfaces/Video";
import { CommentInitialState } from "../Interfaces/Comments";
import { commentReducer } from "./reducers/CommentsReducer";

export const useGSelector = <Selected = unknown,>(
    selector: (state: Store) => Selected  
  ): Selected => useSelector(selector, shallowEqual); 
  
  
export interface Store {
    homeVideoData:IVideoState,
    commentData : CommentInitialState    
}


export const rootReducer = combineReducers({
    homeVideoData : homeVideoReducer,
    commentData : commentReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

export const store = createStore(rootReducer,applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export type state = ReturnType<typeof rootReducer>