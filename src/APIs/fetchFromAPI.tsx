import axios from "axios";

const API_KEY = "AIzaSyCIUH3RYFBIMJCumv5se79f0FQ73-6iceU";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search"

export const fetchVideo =  async()=>{
    const { data } = await axios.get(`${BASE_URL}`,{
        params : {
            part : "snippet,id",
            q : "All",
            key : API_KEY,
            maxResults : 50
        }
    })
    return data.items
}