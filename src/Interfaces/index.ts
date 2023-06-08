export interface ICategroy {
    categoryName : string
}

export interface IVideosProps {
    etag : string,
    id : { 
        kind : string,
        videoId: string,
        playlistId : string
    }
    kind : string,
    snippet : {
        channelId : string,
        channelTitle : string,
        description : string,
        liveBroadcastContent : string,
        publishTime : string,
        publishedAt : string,
        thumbnails : {
            default : {
                url : string,
                width : number,
                height : number
            },
            high : {
                url : string,
                width : number,
                height : number
            },
            medium : {
                url : string,
                width : number,
                height : number
            }
        }
        title : string
    } 
}

export interface IWatchProps {
    etag : string,
    id : string,
    kind : string,
    snippet : {
        categoryId : string,
        channelId : string,
        channelTitle : string,
        description : string,
        liveBroadcastContent : string,
        localized : {
            description : string,
            title : string
        }
        tags : string[]
        publishedAt : string,
        thumbnails : {
            default : {
                url : string,
                width : number,
                height : number
            },
            high : {
                url : string,
                width : number,
                height : number
            },
            maxres : {
                url : string,
                width : number,
                height : number
            }
            medium : {
                url : string,
                width : number,
                height : number
            },
            standard : {
                url : string,
                width : number,
                height : number
            }
        }
        title : string
    }
}


export interface ICommentsProps {
    "kind": string,
    "etag": string,
      "id": string,
      "snippet": {
        "videoId": string,
        "topLevelComment": {
          "kind": string,
          "etag": string,
          "id": string,
          "snippet": {
            "videoId": string,
            "textDisplay": string,
            "textOriginal": string,
            "authorDisplayName": string,
            "authorProfileImageUrl": string,
            "authorChannelUrl": string,
            "authorChannelId": {
              "value": string
            },
            "canRate": boolean,
            "viewerRating": string,
            "likeCount": number,
            "publishedAt": string,
            "updatedAt": string
          }
        },
        "canReply": boolean,
        "totalReplyCount": number,
        "isPublic": boolean
    }
}

export interface IFilter {
    filters : {
        heading : string,
        filter1 : string,
        filter2 : string,
        filter3 : string,
        filter4 : string,
        filter5 : string,
        filter6 : string,
        filter7 : string,
        filter8 : string,
        filter9 : string,
        filter10 : string,
        filter11 : string,
    }[],
    handleFilter : (type:string)=> void;
}