import axios from "axios";

const API_KEY = "AIzaSyBrPqUoL6goYZSwkKI5nGu4Wnknkpkm18g";
const BASE_URL = "https://www.googleapis.com/youtube/v3"

enum Parts {
    snippet = "snippet",
    id = "id"
}

export const fetchVideo =  async(
    category?:string,
    type?:string,
    channelId?:string,
    ordertype?:string,
    maxResults?:number,
    evtype?:string,)=> {
        const { data } = await axios.get(`${BASE_URL}/search`,{
            params : {
                part : Parts.snippet,
                q : category,
                type : type,
                key : API_KEY,
                channelId : channelId,
                order : ordertype,
                eventType : evtype,
                maxResults : maxResults
            }
        })
        return data.items
}

export const fetchChannel =  async(channelId:string)=>{
    const { data } = await axios.get(`${BASE_URL}/channels`,{
        params : {
            part : Parts.snippet,
            key : API_KEY,
            id : channelId,
        }
    })
    return data.items[0]
}

export const fetchPlaylist =  async(list:string)=>{
    const { data } = await axios.get(`${BASE_URL}/playlistItems`,{
        params : {
            part : Parts.snippet,
            key : API_KEY,
            playlistId : list
        }
    })
    return data.items;
}



export const fetchWatchContainerData = async(url:string,videoId:string,resultShow?:number)=>{
    const res = await axios.get(`${BASE_URL}/${url}`,{
        params : {
            part : Parts.snippet,
            relatedToVideoId : videoId,
            id : videoId,
            key : API_KEY,
            maxResults : resultShow,
            type:"video",
        }
    })
    return res.data.items
}

export const fetchComments = async (videoId:string,resultShow:number)=>{
    const res = await axios.get(`${BASE_URL}/commentThreads`,{
        params : {
            part : Parts.snippet,
            videoId : videoId,
            key : API_KEY,
            maxResults : resultShow,
        }
    })
    return res.data.items
}

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=mankirt%20aulakh%20new%20song&type=playlist&key=[Y