import axios from "axios";

const API_KEY = "AIzaSyBwJd6X1zNVMCrXS1KHiWwxTdJJzHovXeU";
const BASE_URL = "https://www.googleapis.com/youtube/v3"

enum Parts {
    snippet = "snippet",
    id = "id"
}

export const fetchVideo =  async(category:string)=>{
    const { data } = await axios.get(`${BASE_URL}/search`,{
        params : {
            part : Parts.snippet,
            q : category,
            key : API_KEY,
            maxResults : 33,
        }
    })
    return data.items
}


export const fetchWatchVideo = async(url:string,videoId:string)=>{
    const res = await axios.get(`${BASE_URL}/${url}`,{
        params : {
            part : Parts.snippet,
            id : videoId,
            key : API_KEY,
        }
    })
    return res.data.items
}


// https://youtube.googleapis.com/youtube/v3/search?relatedToVideoId=xJXbDLlGDWk&key=[YOUR_API_KEY]