import axios from "axios";

const API_KEY = "AIzaSyDzggVpTJeDhyk42u3YQJQGHByl6OPntwk";
const BASE_URL = "https://www.googleapis.com/youtube/v3"

enum Parts {
    snippet = "snippet",
    id = "id"
}

export const fetchVideo =  async(category:string,type:string,channelId:string,ordertype:string)=>{
    const { data } = await axios.get(`${BASE_URL}/search`,{
        params : {
            part : Parts.snippet,
            q : category,
            type : type,
            key : API_KEY,
            channelId : channelId,
            order : "date",
            // eventType : "live",
            maxResults : 9
        }
    })
    return data.items
}


export const fetchWatchVideo = async(url:string,videoId:any)=>{
    const res = await axios.get(`${BASE_URL}/${url}`,{
        params : {
            part : Parts.snippet,
            relatedToVideoId : videoId,
            id : videoId,
            key : API_KEY,
            maxResults : 33,
            type:"video"
        }
    })
    return res.data.items
}

export const fetchComments = async (videoId:string)=>{
    const res = await axios.get(`${BASE_URL}/commentThreads`,{
        params : {
            part : Parts.snippet,
            videoId : videoId,
            key : API_KEY,
            maxResults : 50,
        }
    })
    return res.data.items
}

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=mankirt%20aulakh%20new%20song&type=playlist&key=[Y