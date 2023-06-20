import axios from "axios";
import { IVideoSearchParams } from "../Interfaces/params";
// import { IVideoSearchParams } from "../Interfaces/params";

//1:- AIzaSyBwJd6X1zNVMCrXS1KHiWwxTdJJzHovXeU
//2:- AIzaSyCPq_DDjcXEhIU3AHh428oe4KvxZmYrpQM
//3:- AIzaSyCUokM-VafPukiBr2m21TTP5OD67y7SyzA
//4:- AIzaSyBrPqUoL6goYZSwkKI5nGu4Wnknkpkm18g
//5:- AIzaSyC0YjjtfJONrCpKncE9XYlQebglR0kueLU

const API_KEY = "AIzaSyBwJd6X1zNVMCrXS1KHiWwxTdJJzHovXeU";
const BASE_URL = "https://www.googleapis.com/youtube/v3"

enum Parts {
    snippet = "snippet",
}

export const fetchVideos = async(videoParams:IVideoSearchParams)=> {
    const res = await axios.get(`${BASE_URL}/search`,{
            params : {
                part : Parts.snippet,
                key : API_KEY,
                maxResults : 12,
                pageToken : videoParams.pageToken,
                ...videoParams
            }
        })
        const videodata = {
            key : videoParams.q,
            value : res.data
        }
    return videodata
}


// export const fetchWatchData = async(videoId:string)=>{
//     const res = await axios.get(`${BASE_URL}/videos`,{
//         params : {
//             part : Parts.snippet,
//             id : videoId,
//             key : API_KEY,
//             type:"video",
//         }
//     })
//     const results = {
//         videoId : videoId,
//         value : res.data.items
        
//     }
//     return results;
// }

export interface IComments {
    videoId : string
}

export const fetchComments = async (commentParams:IComments)=>{
    const res = await axios.get(`${BASE_URL}/commentThreads`,{
        params : {
            part : Parts.snippet,
            key : API_KEY,
            maxResults : 10,
            ...commentParams
        }
    })
    const results = {
        videoid : commentParams.videoId,
        items : res.data
    }
    return results;
}

export const fetchSuggestedVideos = async(videoId:string)=>{
    const res = await axios.get(`${BASE_URL}/$search`,{
        params : {
            part : Parts.snippet,
            relatedToVideoId : videoId,
            id : videoId,
            key : API_KEY,
            maxResults : 10,
            type:"video",
        }
    })
    return res.data.items
}